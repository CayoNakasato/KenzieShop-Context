import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import {
  ButtonAdd,
  ButtonRemove,
  ContainerOne,
  ContainerTwo,
  Content,
  ItemController,
} from "./style";

export const Product = ({ product, itsOnCart }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <>
      {itsOnCart ? (
        <ContainerTwo>
          <img src={product.url} alt={product.name} />
          <Content>
            <h2>{product.name}</h2>
            <span>R${product.price.toFixed(2)}</span>
            <span>Quantidade: {product.count}</span>

            <ItemController>
              <ButtonRemove onClick={() => removeFromCart(product.id)}>
                -
              </ButtonRemove>
              <span>{product.count}</span>
              <ButtonAdd onClick={() => addToCart(product)}>+</ButtonAdd>
            </ItemController>
          </Content>
        </ContainerTwo>
      ) : (
        <ContainerOne>
          <img src={product.url} alt={product.name} />
          <h2>{product.name}</h2>
          <span>R${product.price.toFixed(2)}</span>
          <button onClick={() => addToCart(product)}>
            Adiconar ao Carrinho
          </button>
        </ContainerOne>
      )}
    </>
  );
};

import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { Product } from "../Product";
import { Container } from "./style";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <h1>Meu carrinho de compras</h1>
      {cart?.map((product) => (
        <Product key={product.id} product={product} itsOnCart />
      ))}
    </Container>
  );
};

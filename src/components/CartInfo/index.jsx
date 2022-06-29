import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { Container } from "./style";

export const CartInfo = () => {
  const { cart } = useContext(CartContext);

  const totalItens = cart.reduce((acc, product) => acc + product.count, 0);

  const totalAmount = cart.reduce((acc, elem) => {
    if (elem.count > 1) {
      return acc + elem.count * elem.price;
    } else if (elem.count === 1) {
      return acc + elem.price;
    }
  }, 0);

  return (
    <Container>
      <h2>Resumo do Pedido</h2>
      <span>Quantidade: {totalItens} Itens</span>
      <span>Valor Total : R${totalAmount.toFixed(2)}</span>
    </Container>
  );
};

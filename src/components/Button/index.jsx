import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

export const Button = ({ type, item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const text = type === "itsOnCart" ? "Remove Item" : "Add To cart";

  const handleClick = () => {
    if (type === "itsOnCart") {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };

  return <button onClick={handleClick}> {text} </button>;
};

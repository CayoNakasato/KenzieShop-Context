/* eslint-disable no-restricted-globals */
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const productExist = cart?.find(({ id }) => id === item.id);

    let newList;

    if (productExist) {
      newList = [...cart];

      const index = newList.indexOf(productExist);

      newList[index].count += 1;
    } else {
      const newProduct = { ...item, count: 1 };

      newList = [...cart, newProduct];
    }
    localStorage.setItem("cart", JSON.stringify(newList));
    setCart(newList);
  };

  const removeFromCart = (id) => {
    const productExist = cart?.find((product) => id === product.id);
    let newList;

    if (productExist.count > 1) {
      newList = [...cart];

      const index = newList.indexOf(productExist);

      newList[index].count -= 1;
    } else if (confirm("Deseja excluir este produto?")) {
      newList = cart.filter((product) => product.id !== id);
    }
    if (newList) {
      localStorage.setItem("cart", JSON.stringify(newList));
      setCart(newList);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

import { useNavigate } from "react-router-dom";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { Logo, StyledHeader } from "./style";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

export const Header = ({ isHome }) => {
  const navigate = useNavigate();

  const {cart} = useContext(CartContext)

  const totalItens = cart.reduce((acc, elem) => acc + elem.count, 0);

  return (
    <StyledHeader>
      {isHome ? (
        <>
          <Logo>
            <h1>Kenzie Shop</h1>
          </Logo>

          <button onClick={() => navigate("/cart")}>
            <FiShoppingCart />
            <span>{totalItens}</span>
            Cart
          </button>
        </>
      ) : (
        <>
          <Logo>
            <h1>Kenzie Shop</h1>
          </Logo>

          <button onClick={() => navigate("/")}>
            <FiHome />
            Home
          </button>
        </>
      )}
    </StyledHeader>
  );
};

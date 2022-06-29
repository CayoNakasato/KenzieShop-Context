import { Routes, Route } from "react-router-dom";
import { CartPage } from "../pages/Cart";
import { HomePage } from "../pages/Home";

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

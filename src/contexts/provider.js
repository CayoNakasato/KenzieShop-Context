import { CartProvider } from "./cart";
import { CatalogueProvider } from "./catalogue";

export const Provider = ({ children }) => {
  return (
    <CatalogueProvider>
      <CartProvider>{children}</CartProvider>
    </CatalogueProvider>
  );
};

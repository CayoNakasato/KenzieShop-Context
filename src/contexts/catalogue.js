import { createContext, useState } from "react";
import { products } from "../dataBase/data";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState(products);

  return (
    <CatalogueContext.Provider
      value={{ catalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};

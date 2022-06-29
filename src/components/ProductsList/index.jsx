import { useContext } from "react";
import { CatalogueContext } from "../../contexts/catalogue";
import { Product } from "../Product";
import { Container } from "./style";

export const ProductList = () => {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <Container>
      {catalogue?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

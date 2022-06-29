import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductsList";
import { Container } from "./style";

export const HomePage = () => {
 
  return (
    <Container>
     <Header isHome/>
     <ProductList/>
    </Container>
  );
};

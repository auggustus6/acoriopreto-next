import DefaultContainer from "@components/DefaultContainer";
import PagePath from "@components/PagePath";
import { formatLink } from "src/util/formatLink";
import styled from "styled-components";
import ImageShowcase from "@components/ImageShowcase";
import MainLayout from "../MainLayout";

import productsJson from "@mocs/produtos.json";

const Container = styled(DefaultContainer)`
  margin: 0.4rem 0 2rem 0;
  .content {
    flex-direction: column;
  }
  h1,
  h3 {
    color: ${(p) => p.theme.palette.secondary.main};
  }
`;

export default function ProdutosTemplates() {
  const images = productsJson.map((prod) => prod.link);
  const links = productsJson.map((item) => {
    return {
      image: `/img/produtos-page/${item.link}.jpg`,
      link: `produtos/${item.link}`,
      title: item.titulo,
    };
  });

  links.shift();

  return (
    <>
      <MainLayout pageTitle="Produtos - AçoRio">
        <Container>
          <PagePath paths={[{ name: "Home", link: "/" }]}>Produtos</PagePath>
          <h1>Produtos</h1>
          <h3>Conheça nossos produtos:</h3>
          <ImageShowcase links={links} />
        </Container>
      </MainLayout>
    </>
  );
}

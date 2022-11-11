import DefaultContainer from "@components/DefaultContainer";
import PagePath from "@components/PagePath";
import { formatLink } from "src/util/formatLink";
import styled from "styled-components";
import allLinks from "@mocs/menuLinks.json";
import ImageShowcase from "@components/ImageShowcase";
import MainLayout from "../MainLayout";

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
  const images = allLinks.produtos;
  const links = images.map((item) => {
    return {
      image: `/img/produtos-page/${formatLink(item)}.jpg`,
      link: `produtos/${formatLink(item)}`,
      title: item,
    };
  });

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

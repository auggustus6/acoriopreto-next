import DefaultContainer from "@components/DefaultContainer";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import Image from "next/image";
import Link from "next/link";
import { formatLink } from "src/util/formatLink";
import styled from "styled-components";
import allLinks from "@mocs/menuLinks.json";
import HeadMeta from "@components/HeadMeta";
import ImageShowcase from "@components/ImageShowcase";

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
      <HeadMeta pageTitle="Produtos - AçoRio" />
      <Header />
      <Container>
        <PagePath paths={[{ name: "Home", link: "/" }]}>Produtos</PagePath>
        <h1>Produtos</h1>
        <h3>Conheça nossos produtos:</h3>
        <ImageShowcase links={links} />
        
      </Container>
      <Footer />
    </>
  );
}

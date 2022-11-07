import DefaultContainer from "@components/DefaultContainer";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import Image from "next/image";
import Link from "next/link";
import { formatLink } from "src/util/formatLink";
import styled from "styled-components";
import informacoesJson from "@mocs/informacoes.json";
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

// interface ImageShowcaseProps {
//   links: {
//     image: string;
//     link: string;
//     title: string;
//   }[];
// }

export default function InformacoesTemplates() {
  const links = informacoesJson.map((info) => {
    return {
      image: `/img/informacoes-page/${info.imagens[0]}`,
      link: `/informacoes/${info.link}`,
      title: info.titulo,
    };
  });
  return (
    <>
      <Header />
      <Container>
        <PagePath paths={[{ name: "Home", link: "/" }]}>Produtos</PagePath>
        <h1>Informações</h1>
        <h3>Conheça todas as Informações da AçoRio:</h3>
        <ImageShowcase links={links} />
      </Container>
      <Footer />
    </>
  );
}

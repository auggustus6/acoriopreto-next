import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import Link from "next/link";
import { Container, Content } from "./styles";
import allLinksJson from "@mocs/menuLinks.json";

import AsideNav from "@components/AsideNav";
import ImagesContainer from "@components/ImagesContainer";

interface ObraPageData {
  obra: {
    link: string;
    titulo: string;
    imagens: string[];
    video?: string;
  };
}

export default function ObraPageTemplate({ obra }: ObraPageData) {
  const { link, titulo, imagens, video } = obra;

  return (
    <>
      <Header />
      <Container>
        <PagePath
          paths={[
            { name: "Home", link: "/" },
            { name: "Obras", link: "/obras" },
          ]}
        >
          {titulo}
        </PagePath>
        <h1>{titulo}</h1>
        <Content>
          <main>
            <h3>Confira:</h3>
            <ImagesContainer title={titulo} images={imagens} path="/img/construcao-page" />
          </main>
          <AsideNav title="OBRAS" links={allLinksJson.obras} />
        </Content>
      </Container>
      <Footer />
    </>
  );
}

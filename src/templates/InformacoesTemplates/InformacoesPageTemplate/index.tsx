import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import { Container, Content } from "./styles";
import allLinksJson from "@mocs/menuLinks.json";
import AsideNav from "@components/AsideNav";
import ImagesContainer from "@components/ImagesContainer";
import React from "react";
import stringSimilarity from "string-similarity";
import SimiliarPosts from "@components/SimiliarPosts";

type ContentType = string | string[];

interface ItemPost {
  htmlTipo: string;
  conteudo: ContentType;
}

interface InformacaoPageData {
  informacao: {
    link: string;
    titulo: string;
    imagens: string[];
    post: ItemPost[];
  };
}

function pickComponent({ htmlTipo, conteudo }: ItemPost) {
  let children;
  switch (htmlTipo) {
    case "H2":
    case "P":
      children = conteudo;
      break;
    case "UL":
      children = (conteudo as string[]).map((item) => <li key={item}>{item}</li>);
      break;
    default:
      break;
  }
  return React.createElement(htmlTipo.toLowerCase(), null, children);
}

export default function InformacoesPageTemplate({ informacao }: InformacaoPageData) {
  const { link, titulo, imagens, post } = informacao;

  const similiarPosts = stringSimilarity
    .findBestMatch(titulo.toUpperCase(), allLinksJson.informacoes)
    .ratings.filter((item) => titulo.toUpperCase() != item.target && item.rating >= 0.6)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <>
      <Header />
      <Container>
        <PagePath
          paths={[
            { name: "Home", link: "/" },
            { name: "Informações", link: "/informacoes" },
          ]}
        >
          {titulo}
        </PagePath>
        <h1>{titulo}</h1>
        <Content>
          <main>
            <ImagesContainer title={titulo} images={imagens} path={"/img/informacoes-page/"} />
            <small>Clique nas imagens para ampliar</small>
            {post.map((item) =>
              pickComponent({ htmlTipo: item.htmlTipo, conteudo: item.conteudo })
            )}
          </main>

          <AsideNav title="INFORMAÇÕES" links={allLinksJson.informacoes} />
        </Content>
        {/* <SimiliarPosts path="/informacoes"  posts={[]} /> */}
      </Container>
      <Footer />
    </>
  );
}

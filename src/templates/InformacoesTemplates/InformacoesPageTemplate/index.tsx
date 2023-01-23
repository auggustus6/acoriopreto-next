import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import { Container, Content } from "./styles";
import allLinksJson from "@mocs/menuLinks.json";
import AsideNav from "@components/AsideNav";
import ImagesContainer from "@components/ImagesContainer";
import React from "react";
import stringSimilarity from "string-similarity";
import informacoesJson from "@mocs/informacoes.json";
import SimiliarPosts from "@components/SimiliarPosts";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { AiOutlineFacebook as FaceBookIcon } from "react-icons/ai";
import ShowCities from "@components/ShowCities";
import { formatLink } from "src/util/formatLink";
import MainLayout from "src/templates/MainLayout";

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
    .ratings.filter((item) => titulo.toUpperCase() != item.target && item.rating >= 0.3)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map((item) => item.target);

  const filteredPosts = informacoesJson
    .filter((item) => similiarPosts.includes(item.titulo.toUpperCase()))
    .map((item) => {
      return { title: item.titulo, image: item.imagens[0], link: item.link };
    });

  return (
    <MainLayout
      descriptionMeta={titulo + " - " + post[0].conteudo.slice(0, 100) + "... Saiba mais."}
      pageTitle={titulo}
    >
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
            {post.map((item, i) => (
              <span key={i}>
                {pickComponent({ htmlTipo: item.htmlTipo, conteudo: item.conteudo })}
              </span>
            ))}
          </main>

          <AsideNav title="INFORMAÇÕES" links={allLinksJson.informacoes} />
        </Content>
        <div>
          <h3 className="h3-title">Para saber mais sobre Aço para construção</h3>
          <p className="contact">
            Ligue para 17 3238-3191 ou clique aqui e entre em contato por email.
          </p>
          <small>Gostou? compartilhe!</small>
          <div className="social-buttons">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${`https%3A%2F%2Fwww.acoriopreto.com.br%2F${formatLink(
                link
              )}`}&display=popup&ref=plugin&src=like&kid_directed_site=0`}
              className="facebook-share"
              target="_blank"
              rel="noreferrer"
            >
              <FaceBookIcon size={16} />
              Compartilhar
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURI(
                titulo
              )}&url=${encodeURI(`https://www.acoriopreto.com.br/${link}`)}`}
              className="twitter-share"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon size={16} />
              Tweet
            </a>
          </div>
        </div>
        <h3 className="h3-title">Publicações Relacionadas</h3>
        <SimiliarPosts
          path="/informacoes"
          posts={filteredPosts}
          imageFolderPath={"/img/informacoes-page"}
        />

        <h3 style={{ marginTop: "2rem" }} className="h3-title">
          Principais cidades e regiões do Brasil onde a AçoRio atende Aço para construção:
        </h3>
        <ShowCities />
        <small className="small-text-copyright">
          O conteúdo do texto desta página é de direito reservado. Sua reprodução, parcial ou
          total, mesmo citando nossos links, é proibida sem a autorização do autor. Crime de
          violação de direito autoral – artigo 184 do Código Penal – Lei 9610/98 - Lei de
          direitos autorais.
        </small>
      </Container>
    </MainLayout>
  );
}

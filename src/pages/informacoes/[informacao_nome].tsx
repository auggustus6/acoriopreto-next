import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { formatLink } from "src/util/formatLink";
import informacoesJson from "@mocs/informacoes.json";
import InformacoesPageTemplate from "src/templates/InformacoesTemplates/InformacoesPageTemplate";

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

export default function index({ informacao }: InformacaoPageData) {
  return <InformacoesPageTemplate informacao={informacao} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const informacoesNomes = informacoesJson.map((info) => {
    return {
      params: {
        informacao_nome: info.link,
      },
    };
  });
  return {
    paths: [...informacoesNomes],
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { informacao_nome } = params;

  const info = informacoesJson.find((item) => item.link === informacao_nome);

  return {
    // Passed to the page component as props
    props: {
      informacao: {
        link: info?.link,
        titulo: info?.titulo,
        imagens: info?.imagens,
        post: info?.post,
      },
    },
  };
};

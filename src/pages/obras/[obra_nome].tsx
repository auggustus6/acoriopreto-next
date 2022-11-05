import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import ProdutoPageTemplate from "src/templates/ProdutosTemplates/ProdutoPageTemplate";
import { formatLink } from "src/util/formatLink";
import allLinksJson from "@mocs/menuLinks.json";
import obrasJson from "@mocs/obras.json";
import ObraPageTemplate from "src/templates/ObrasTemplates/ObraPageTemplate";

interface Obra {
  link: string;
  titulo: string;
  imagens: string[];
  video?: string;
}

interface ObraPageData {
  obra: Obra;
}

export default function index({ obra }: ObraPageData) {
  return <ObraPageTemplate obra={obra} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const obraNomes = allLinksJson.obras.map((obra) => {
    return {
      params: {
        obra_nome: formatLink(obra),
      },
    };
  });
  return {
    paths: [...obraNomes],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { obra_nome } = params;

  const obra = obrasJson.find((item) => item.link === obra_nome) as Obra;

  return {
    props: {
      obra: {
        link: obra?.link,
        titulo: obra?.titulo,
        imagens: obra?.imagens,
        video: obra?.video || null,
      },
    },
  };
};

import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import ProdutoPageTemplate from "src/templates/ProdutosTemplates/ProdutoPageTemplate";
import { formatLink } from "src/util/formatLink";
import allLinksJson from "@mocs/menuLinks.json";
import productsJson from "@mocs/products.json";

interface ProdutoPageData {
  product: {
    link: string;
    title: string;
    paragraphs: string[];
    list?: string[];
  };
}

export default function index({ product }: ProdutoPageData) {
  return <ProdutoPageTemplate product={product} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productsNames = allLinksJson.produtos.map((prod) => {
    return {
      params: {
        productname: formatLink(prod),
      },
    };
  });
  return {
    paths: [...productsNames],
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { productname } = params;

  const prod = productsJson.find((item) => item.link === productname);

  return {
    // Passed to the page component as props
    props: {
      product: {
        link: prod?.link,
        title: prod?.titulo,
        paragraphs: prod?.paragrafos,
        list: prod?.lista || null,
      },
    },
  };
};
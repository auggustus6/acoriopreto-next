import { GetStaticPaths, GetStaticProps } from "next";
import ProdutoPageTemplate from "src/templates/ProdutosTemplates/ProdutoPageTemplate";
import produtosJson from "@mocs/produtos.json";

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
  const productsNames = produtosJson.map((prod) => {
    return {
      params: {
        produto_nome: prod.link,
      },
    };
  });

  productsNames.shift();

  return {
    paths: [...productsNames],
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { produto_nome } = params;

  const prod = produtosJson.find((item) => item.link === produto_nome);

  return {
    // Passed to the page component as props
    props: {
      product: {
        link: prod?.link,
        title: prod?.titulo,
        paragraphs: prod?.paragrafos,
        list: prod?.lista || null,
        footer: prod?.footer || null,
      },
    },
  };
};

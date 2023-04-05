import { GetStaticPaths, GetStaticProps } from "next";
import ProdutoPageTemplate from "src/templates/ProdutosTemplates/ProdutoPageTemplate";
import ferramentasJson from "@mocs/ferramentas.json";
import FerramentaPageTemplate from "src/templates/FerramentasTemplate/FerramentaPageTemplate";

interface FerramentaPageData {
  ferramenta: {
    link: string;
    title: string;
    paragraphs: string[];
    list?: string[];
  };
}

export default function index({ ferramenta }: FerramentaPageData) {
  return <FerramentaPageTemplate ferramenta={ferramenta} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ferramentaNames = ferramentasJson.map((prod) => {
    return {
      params: {
        ferramentas_nome: prod.link,
      },
    };
  });
  return {
    paths: [...ferramentaNames],
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { ferramentas_nome } = params;

  const ferr = ferramentasJson.find((item) => item.link === ferramentas_nome);

  return {
    props: {
      ferramenta: {
        link: ferr?.link,
        title: ferr?.titulo,
        paragraphs: ferr?.paragrafos,
        list: ferr?.list || null,
        // footer: prod?.footer || null,
      },
    },
  };
};

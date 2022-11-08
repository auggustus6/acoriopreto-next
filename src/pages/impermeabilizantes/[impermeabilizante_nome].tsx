import { GetStaticPaths, GetStaticProps } from "next";
import { formatLink } from "src/util/formatLink";
import allLinksJson from "@mocs/menuLinks.json";
import impermeabilizanteJson from "@mocs/impermeabilizantes.json";
import ImpermeabilizantePageTemplate from "src/templates/ImpermeabilizanteTemplates/ImpermeabilizantePageTemplate";

interface ImpermeabilizantePageData {
  impermeabiliazante: {
    link: string;
    titulo: string;
    imagem: string;
    conteudo: string;
  };
}

export default function index({ impermeabiliazante }: ImpermeabilizantePageData) {
  return <ImpermeabilizantePageTemplate impermeabiliazante={impermeabiliazante} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const names = allLinksJson.impermeabilizantes.map((item) => {
    return {
      params: {
        impermeabilizante_nome: formatLink(item),
      },
    };
  });

  return {
    paths: [...names],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { impermeabilizante_nome } = params;

  const findItem = impermeabilizanteJson.find((item) => item.link === impermeabilizante_nome);

  return {
    props: {
      impermeabiliazante: {
        link: findItem?.link,
        titulo: findItem?.titulo,
        imagem: findItem?.imagem,
        conteudo: findItem?.conteudo,
      },
    },
  };
};

import PagePath from "@components/PagePath";
import { Container, Content } from "./styles";

import AsideNav from "@components/AsideNav";
import ImagesContainer from "@components/ImagesContainer";
import MainLayout from "src/templates/MainLayout";

import obrasJson from "@mocs/obras.json";

interface ObraPageData {
  obra: {
    link: string;
    titulo: string;
    imagens: string[];
    video?: string;
  };
}

export default function ObraPageTemplate({ obra }: ObraPageData) {
  const { titulo, imagens } = obra;

  const obrasLinks = obrasJson.map((obra) => {
    return {href: obra.link, text: obra.titulo}
  });

  return (
    <>
      <MainLayout
        descriptionMeta={titulo + " - " + titulo.slice(0, 100) + "... Saiba mais."}
        pageTitle={titulo}
      >
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
            <AsideNav title="OBRAS" links={obrasLinks} />
          </Content>
        </Container>
      </MainLayout>
    </>
  );
}

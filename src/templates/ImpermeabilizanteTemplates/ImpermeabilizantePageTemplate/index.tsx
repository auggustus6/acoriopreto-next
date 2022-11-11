// @ts-ignore
import Lightbox from "react-awesome-lightbox";
import PagePath from "@components/PagePath";
import { Container, Content } from "./styles";
import Image from "next/image";
import allLinksJson from "@mocs/menuLinks.json";
import AsideNav from "@components/AsideNav";
import { useState } from "react";

import { HiMagnifyingGlass as ZoomIcon } from "react-icons/hi2";
import MainLayout from "src/templates/MainLayout";

interface ImpermeabilizantePageData {
  impermeabiliazante: {
    link: string;
    titulo: string;
    imagem: string;
    conteudo: string;
  };
}

export default function ImpermeabilizantePageTemplate({
  impermeabiliazante,
}: ImpermeabilizantePageData) {
  const { link, titulo, imagem, conteudo } = impermeabiliazante;
  const [selectedImage, setSelectedImage] = useState("");

  return (
      <MainLayout
        descriptionMeta={titulo + " - " + titulo.slice(0, 100) + "... Saiba mais."}
        pageTitle={titulo}
      >
        <Container>
          <PagePath
            paths={[
              { name: "Home", link: "/" },
              { name: "Produtos", link: "/produtos" },
            ]}
          >
            {titulo}
          </PagePath>
          <h1>{titulo}</h1>
          <Content>
            <main>
              <h3>Confira:</h3>
              <div className="float-image">
                <Image
                  src={`/img/impermeabilizantes-page/${imagem}`}
                  width={300}
                  height={300}
                  alt={`imagem ilustrativa de ${titulo}`}
                  onClick={() => setSelectedImage(`/img/impermeabilizantes-page/${imagem}`)}
                />
                <small
                  onClick={() => setSelectedImage(`/img/impermeabilizantes-page/${imagem}`)}
                >
                  <ZoomIcon size={24} />
                </small>
              </div>

              <div dangerouslySetInnerHTML={{ __html: conteudo }}></div>
            </main>
            <AsideNav title="IMPERMEABILIZANTES" links={allLinksJson.impermeabilizantes} />
          </Content>
        </Container>
        <Lightbox image={selectedImage} title={titulo} onClose={() => setSelectedImage("")} />
      </MainLayout>
  );
}

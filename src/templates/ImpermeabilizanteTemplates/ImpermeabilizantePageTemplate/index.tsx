// @ts-ignore
import Lightbox from "react-awesome-lightbox";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import Link from "next/link";
import { Container, Content } from "./styles";
import Image from "next/image";
import allLinksJson from "@mocs/menuLinks.json";
import { formatLink } from "src/util/formatLink";
import AsideNav from "@components/AsideNav";
import HeadMeta from "@components/HeadMeta";
import { useState } from "react";

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
    <>
      <HeadMeta
        description={titulo + " - " + titulo.slice(0, 100) + "... Saiba mais."}
        pageTitle={titulo}
      />
      <Header />
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
              <small>clique na imagem para dar zoom</small>
            </div>

            <div dangerouslySetInnerHTML={{ __html: conteudo }}></div>
          </main>
          <AsideNav title="IMPERMEABILIZANTES" links={allLinksJson.impermeabilizantes} />
        </Content>
      </Container>
      <Footer />
      <Lightbox image={selectedImage} title={titulo} onClose={() => setSelectedImage("")} />
    </>
  );
}

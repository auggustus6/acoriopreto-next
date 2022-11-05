import FixedBackground from "@components/FixedBackground";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import Link from "next/link";
import { Container, Content, ImagesContainer } from "./styles";
import banner from "./banner-sobre.jpg";
import Image from "next/image";
import allLinksJson from "@mocs/menuLinks.json";
import productsJson from "@mocs/products.json";
import { formatLink } from "src/util/formatLink";

// @ts-ignore
import Lightbox from "react-awesome-lightbox";
import { useState } from "react";

interface ObraPageData {
  obra: {
    link: string;
    titulo: string;
    imagens: string[];
    video?: string;
  };
}

export default function ObraPageTemplate({ obra }: ObraPageData) {
  const { link, titulo, imagens, video } = obra;
  const [selectedImage, setSelectedImage] = useState("");

  function handleImageSelect(imageSrc: string) {
    setSelectedImage(imageSrc);
  }

  return (
    <>
      <Header />
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
            <ImagesContainer>
              {imagens.map((img) => (
                <div
                  key={img}
                  onClick={() => handleImageSelect(`/img/construcao-page/${img}`)}
                >
                  <Image
                    src={`/img/construcao-page/${img}`}
                    width={215}
                    height={202}
                    alt={`foto ilustrativa de ${titulo}`}
                  />
                </div>
              ))}
            </ImagesContainer>
          </main>
          <aside>
            <h3>OBRAS</h3>
            <ul>
              {allLinksJson.obras.map((obra) => (
                // <li key={prod} className="active-nav">
                <li
                  key={obra}
                  className={`${obra?.toLowerCase() == titulo?.toLowerCase() && "active-nav"}`}
                >
                  <Link href={`${formatLink(obra)}`}>{obra}</Link>
                </li>
              ))}
              <span>ENTRE EM CONTATO PELO TELEFONE</span>
              <p>
                <a href="tel:17 3238-3191">17 3238-3191</a>
              </p>
            </ul>
          </aside>
        </Content>
      </Container>
      <Footer />
      <Lightbox image={selectedImage} title={titulo} onClose={() => setSelectedImage("")} />
    </>
  );
}

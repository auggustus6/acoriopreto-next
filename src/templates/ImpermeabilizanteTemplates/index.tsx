import DefaultContainer from "@components/DefaultContainer";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import Image from "next/image";
import Link from "next/link";
import { formatLink } from "src/util/formatLink";
import styled from "styled-components";
import allLinks from "@mocs/menuLinks.json";
import HeadMeta from "@components/HeadMeta";

const Container = styled(DefaultContainer)`
  margin: 0.4rem 0 2rem 0;
  .content {
    flex-direction: column;
  }
  h1,
  h3 {
    color: ${(p) => p.theme.palette.secondary.main};
  }
`;

const ImagesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 2rem;

  span{
    max-width: 200px;
  }

  a:last-child {
    margin-right: auto;
  }

  a {
    display: flex;
    align-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
    font-size: 0.8rem;
    overflow: hidden;
    font-weight: 600;
    gap: 0.4rem;
    color: black;
    :hover {
      opacity: 0.8;
    }

    img {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    }
  }
`;

export default function ImpermeabilizanteTemplate() {
  const images = allLinks.impermeabilizantes;
  return (
    <>
      <HeadMeta pageTitle="Impermeabilizantes - AçoRio" />
      <Header />
      <Container>
        <PagePath paths={[{ name: "Home", link: "/" }]}>Impermeabilizantes</PagePath>
        <h1>Impermeabilizantes</h1>
        <h3>Conheça nossos impermeabilizantes:</h3>
        <ImagesContainer>
          {images.map((img) => (
            <Link key={img} href={`/impermeabilizantes/${formatLink(img)}`}>
              <Image
                src={`/img/impermeabilizantes-page/${formatLink(img)}.jpg`}
                width={215}
                height={202}
                alt={`foto ilustrativa de ${img.toLowerCase}`}
              />
              <span>{img}</span>
            </Link>
          ))}
        </ImagesContainer>
      </Container>
      <Footer />
    </>
  );
}

import Carousel from "@components/Carousel";
import Header from "@components/Header";
import Image from "next/image";
import { BannerSection, Container } from "@rootStyle/home";
import { ProductsSection, ProductImg, ProductLink } from "@rootStyle/productsSectionStyles";
import {
  ServicesContent,
  ServicesSection,
  SubSection,
  CompanyInfo,
} from "@rootStyle/servicesSectionStyles";
import Head from "next/head";
import Thumbs1 from "@images/thumbs.png";
import Thumbs2 from "@images/thumbs2.png";
import DefaultButton from "@components/Buttons/DefaultButton";
import { DefaultContainer } from "@rootStyle/defaultContainer";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home - AçoRio</title>
      </Head>
      <Header />
      <Carousel />
      <BannerSection>
        <h1>
          Na Aço Rio, sua empresa tem a melhor relação custo-benefício, pois encontra em um só
          lugar uma linha completa em aços.
        </h1>
      </BannerSection>
      <ServicesSection>
        <ServicesContent>
          <h2>Serviços</h2>
          <SubSection>
            <div>
              <h3>Projeto de armação de ferragem</h3>
              <p>
                Nosso cliente adquire de maneira exata todos os elementos estruturais que a sua
                obra necessita, evitando compras em quantidades superiores às necessárias,
                eliminando todas as perdas provenientes de pontas e extravio de peças.
              </p>
            </div>
            <span>
              <Image
                src={Thumbs1.src}
                width={270}
                height={230}
                alt="Adulto engenheiro segurando"
              />
            </span>
          </SubSection>
          <SubSection>
            <div>
              <h3>Serviços de engenharia em geral</h3>
              <p>
                Para uma obra ter sucesso em sua execução é fundamental que projeto tenha sido
                bem elaborado, com quantidades bem dimensionadas e orçamento quantificado de
                maneira inteligência e viável.
              </p>
            </div>
            <span>
              <Image
                src={Thumbs2.src}
                width={270}
                height={230}
                alt="Adulto engenheiro segurando"
              />
            </span>
          </SubSection>
          <CompanyInfo>
            <h3>AçoRio - Ferro e aço sob medida para sua construção</h3>
            <p>
              A Aço Rio surgiu da necessidade de pequenas obras da construção civil, que não
              encontram empresas que as atendam de forma flexível. Visando o bem estar dos
              clientes, colaboradores, do futuro, trabalhando sempre preocupados com o meio
              ambiente. Comandada por Vitor Balbo, que tem uma vasta experiência no ramo da
              construção civil, tendo prestado serviços para uma empresa multinacional por mais
              de 08 anos.
            </p>
            <DefaultButton onClick={() => {}} link>
              Saiba mais sobre a AçoRio
            </DefaultButton>
          </CompanyInfo>
        </ServicesContent>
      </ServicesSection>
      <div style={{ marginTop: "200px" }}></div>
      <ProductsSection>
        <DefaultContainer>
          <h2>Conheça alguns de nossos produtos:</h2>
          <div>
            <ProductLink href="">
              <ProductImg width={211} src={Thumbs1.src} height={211} alt="" />
              <p>VERGALHÕES DE AÇO</p>
            </ProductLink>
            <ProductLink href="">
              <ProductImg width={211} src={Thumbs1.src} height={211} alt="" />
              <p>VERGALHÕES DE AÇO</p>
            </ProductLink>
            <ProductLink href="">
              <ProductImg width={211} src={Thumbs1.src} height={211} alt="" />
              <p>VERGALHÕES DE AÇO</p>
            </ProductLink>
            <ProductLink href="">
              <ProductImg width={211} src={Thumbs1.src} height={211} alt="" />
              <p>VERGALHÕES DE AÇO</p>
            </ProductLink>
          </div>
        </DefaultContainer>
      </ProductsSection>
      {/* <StickyBackground backgroundUrl={StickyBg.src} /> */}
      {/* <div style={{background: "white", height: "100vh"}}></div> */}
    </Container>
  );
}

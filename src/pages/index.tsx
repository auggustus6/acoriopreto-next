import Head from "next/head";
import Image from "next/image";

import Footer from "@components/Footer";
import DefaultContainer from "@components/DefaultContainer";
import Carousel from "@components/Carousel";
import Header from "@components/Header";
import DefaultButton from "@components/Buttons/DefaultButton";
import FixedBackground from "@components/FixedBackground";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import { BsTools as TollBoxIcon } from "react-icons/bs";

import { BannerSection, Container } from "@rootStyle/home";
import { ProductsSection, ProductImg, ProductLink } from "@rootStyle/productsSectionStyles";
import { SectionContainer, SubSection, CompanyInfo } from "@rootStyle/servicesSectionStyles";

import Thumbs1 from "@images/thumbs.png";
import Thumbs2 from "@images/thumbs2.png";
import StickyBg from "@images/sticky_bg.jpg";

import thumb1 from "@images/products/1.png";
import thumb2 from "@images/products/2.png";
import thumb3 from "@images/products/3.png";
import thumb4 from "@images/products/4.png";
import thumb5 from "@images/products/5.png";
import thumb6 from "@images/products/6.png";
import thumb7 from "@images/products/7.png";
import thumb8 from "@images/products/8.png";
import Link from "next/link";

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
      <SectionContainer>
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
          <Link href="empresa">
            <DefaultButton>
              Saiba mais sobre a AçoRio <InfoIcon size={18} />
            </DefaultButton>
          </Link>
        </CompanyInfo>
      </SectionContainer>
      <FixedBackground backgroundUrl={StickyBg.src} />
      <ProductsSection>
        <DefaultContainer>
          <h2>Conheça alguns de nossos produtos:</h2>
          <div>
            <ProductLink href="vergalhoes-aco">
              <ProductImg width={211} src={thumb1.src} height={211} alt="" />
              <p>VERGALHÕES DE AÇO</p>
            </ProductLink>
            <ProductLink href="telas-metalicas">
              <ProductImg width={211} src={thumb2.src} height={211} alt="" />
              <p>TELAS METÁLICAS</p>
            </ProductLink>
            <ProductLink href="estribos">
              <ProductImg width={211} src={thumb3.src} height={211} alt="" />
              <p>ESTRIBOS</p>
            </ProductLink>
            <ProductLink href="trelicas-ferro">
              <ProductImg width={211} src={thumb4.src} height={211} alt="" />
              <p>TRELIÇAS DE FERRO</p>
            </ProductLink>
          </div>
          <Link href="produtos">
            <DefaultButton>
              Lista de Produtos <TollBoxIcon size={16} />
            </DefaultButton>
          </Link>
        </DefaultContainer>

        <DefaultContainer>
          <h2>Informações em Destaque</h2>
          <div>
            <ProductLink href="viga-armada">
              <ProductImg width={211} src={thumb5.src} height={211} alt="" />
              <p>VIGA ARMADA</p>
            </ProductLink>
            <ProductLink href="vergalhao-aco">
              <ProductImg width={211} src={thumb6.src} height={211} alt="" />
              <p>VERGALHÃO DE AÇO</p>
            </ProductLink>
            <ProductLink href="trelica-aco">
              <ProductImg width={211} src={thumb7.src} height={211} alt="" />
              <p>TRELIÇA AÇO</p>
            </ProductLink>
            <ProductLink href="ferragem-armada">
              <ProductImg width={211} src={thumb8.src} height={211} alt="" />
              <p>FERRAGEM ARMADA</p>
            </ProductLink>
          </div>
        </DefaultContainer>
      </ProductsSection>
      <Footer />
    </Container>
  );
}

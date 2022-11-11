import PagePath from "@components/PagePath";
import { Container, AboutText } from "./styles";
import banner from "./banner-sobre.jpg";
import Image from "next/image";
import MainLayout from "../MainLayout";

export default function EmpresaPage() {
  return (
    <MainLayout
      descriptionMeta={`Empresas que as atendam de forma flexível. visando
       o bem estar dos clientes, colaboradores, do futuro, trabalhando sempre
       preocupados com o meio... Saiba mais.`}
      pageTitle="Empresa - AçoRio"
    >
      <Container>
        <PagePath paths={[{ name: "Home", link: "/" }]}>Empresa</PagePath>
        <h1>Empresa</h1>
        <h3>Sobre nós</h3>
        {/* <FixedBackground backgroundUrl={Banner.src} customHeight={315} /> */}
        <Image src={banner.src} width={1000} height={315} alt="Banner Aço Rio" />

        <AboutText>
          <p>
            A Aço Rio surgiu da necessidade de pequenas obras da construção civil, que não
            encontram empresas que as atendam de forma flexível. Visando o bem estar dos
            clientes, colaboradores, do futuro, trabalhando sempre preocupados com o meio
            ambiente. Comandada por Vitor Balbo, que tem uma vasta experiência no ramo da
            construção civil, tendo prestado serviços para uma empresa multinacional por mais
            de 08 anos.
          </p>
          <p>
            Na Aço Rio, sua empresa tem a melhor relação custo-benefício, pois encontra em um
            só lugar uma linha completa em aços.
          </p>
          <p>
            Aqui, você adquire materiais cortados sob medida, evitando perdas desnecessárias,
            com a confiança e experiência de uma empresa que tem experiência de mercado.
          </p>
          <p>
            A Aço Rio possui ainda o setor de projetos, criando soluções para os seus clientes
            com o desenvolvimento do projeto para sua obra.
          </p>
        </AboutText>
      </Container>
    </MainLayout>
  );
}

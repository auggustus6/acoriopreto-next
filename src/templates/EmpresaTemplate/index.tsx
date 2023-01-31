import PagePath from "@components/PagePath";
import { Container, AboutText } from "./styles";
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
        <Image src="/img/empresa.png" width={1000} height={315} alt="Banner Aço Rio" />

        <AboutText>
          <p>
            A AçoRio surgiu em 2014 da necessidade de pequenas obras da construção civil, que
            não encontram empresas que as atendam de forma flexível. Visando o bem estar dos
            clientes, colaboradores, do futuro, trabalhando sempre preocupados com o meio
            ambiente.
          </p>
          <p>
            Hoje, a AçoRio atende todos os tipos de obras (pequena, média e grande) com a mesma
            flexibilidade, transparência e agilidade de sua fundação.
          </p>
          <p>
            Contamos com um time de engenheiros, vendedores capacitados ao negócio e os
            melhores armadores ferragem para a segurança da obra e extrema tranquilidade de
            nossos clientes, parceiros e amigos.
          </p>
          <p>
            Na AçoRio, sua empresa tem a melhor relação custo-benefício, pois encontra em um só
            lugar uma linha completa em aços, espaçadores e impermeabilizantes.
          </p>
          <p>
            Aqui, você adquire materiais cortados, dobrado e armado sob medida, evitando perdas
            desnecessárias de material, risco de acidente, diminuição de mão de obra no
            canteiro, diminuição do espaço de obra com a garantia de uma empresa que tem
            experiência no seguimento
          </p>
          <p>
            A AçoRio possui ainda o setor de projetos, criando soluções para os seus clientes
            com o desenvolvimento do projeto estruturais para sua obra.
          </p>
        </AboutText>
      </Container>
    </MainLayout>
  );
}

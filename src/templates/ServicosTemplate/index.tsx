import PagePath from "@components/PagePath";
import { Banner, Container, Section } from "./styles";
import Image from "next/image";
import MainLayout from "../MainLayout";

export default function EmpresaPage() {
  return (
    <>
      <MainLayout
        pageTitle="Serviços - AçoRio"
        descriptionMeta={`Serviços - nosso cliente adquire
       de maneira exata todos os elementos estruturais que a sua obra necessita,
       evitando compras em quantidades... Saiba mais.`}
      >
        <Container>
          <PagePath paths={[{ name: "Home", link: "/" }]}>Serviços</PagePath>
          <h1>Serviços</h1>
          <Banner src="/img/servicos.png" width={1000} height={315} alt="Banner Topo" />
          <Section>
            <Image src="/img/thumb1-large.png" width={1000} height={315} alt="Banner Topo" />
            <div>
              <h3>Armação e instalação de ferragem</h3>
              <p>
                Nosso cliente adquire de maneira exata todos os elementos estruturais que a sua
                obra necessita, evitando compras em quantidades superiores às necessárias,
                eliminando todas as perdas provenientes de pontas e extravio de peças.
              </p>
              <p>
                O aço é cortado, dobrado, armado e instalado nos mais diversos formatos, com
                precisão absoluta, seguindo rigorosamente as especificações do projeto, com
                entrega programada conforme o cronograma da obra.
              </p>
              <p>
                Veja algumas vantagens de usar a ferragem armada (corte, dobra, arma e
                instala):
              </p>

              <ul>
                <li>Eliminação de perda com pontas Menor espaço de armazenamento</li>
                <li>Entrega programada, diminuindo o capital de giro</li>
                <li>Maior rapidez na execução da obra</li>
                <li>Menor risco de acidentes</li>
                <li>Diminuição de mão de obra</li>
                <li>Identificação das peças, otimizando o processo de montagem</li>
                <li>Entregamos montadas ou armamos direto na obra</li>
              </ul>
            </div>
          </Section>
          <Section $isInverse>
            <Image src="/img/thumb2.png" alt={""} width={1170} height={780} />
            <div>
              <h3>Serviços de engenharia em geral</h3>
              <p>
                Para uma obra ter sucesso em sua execução é fundamental que projeto tenha sido
                bem elaborado, com quantidades bem dimensionadas e orçamento quantificado de
                maneira inteligência e viável.
              </p>
              <p>Elaboramos:</p>

              <ul>
                <li>Projeto Arquitetônico, acessibilidade e estrutural</li>
                <li>Muro de Arrimo</li>
                <li>Para residências, industrias e comércios</li>
                <li>Gerenciamento de obras</li>
              </ul>
            </div>
          </Section>
        </Container>
      </MainLayout>
    </>
  );
}

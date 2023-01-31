import DefaultContainer from "@components/DefaultContainer";
import PagePath from "@components/PagePath";
import Link from "next/link";
import styled from "styled-components";
import MainLayout from "../MainLayout";

import productsJson from "@mocs/produtos.json";
import impermeabilizantesJson from "@mocs/impermeabilizantes.json";
import infoJson from "@mocs/informacoes.json";
import obrasJson from "@mocs/obras.json";

const Container = styled(DefaultContainer)`
  margin: 0.4rem 0 2rem 0;
  .content {
    flex-direction: column;
    align-items: flex-start;
  }
  h1 {
    color: ${(p) => p.theme.palette.secondary.main};
  }
  h3,
  h4 {
    font-weight: normal;
    color: #777;
    text-align: start;
    font-size: 1.4rem;
    margin-left: 2rem;
    margin-top: 1rem;
  }

  h4 {
    font-size: 0.8rem;
    margin: 1rem 5rem;
    text-transform: lowercase;
    ::first-letter {
      text-transform: capitalize;
    }
  }
  a:hover > * {
    color: ${(p) => p.theme.palette.secondary.main};
  }
`;

export default function MapaSiteTemplate() {
  return (
    <MainLayout
      pageTitle="Mapa do site - AçoRio"
      descriptionMeta={`O mapa do site com todos os atalhos para todas as páginas
         deste site. Qualquer dúvida estamos a disposição por email ou telefone.
         Clicando aqui`}
    >
      <Container>
        <PagePath paths={[{ name: "Home", link: "/" }]}>Mapa Site</PagePath>
        <h1>Mapa do site</h1>
        <div>
          <Link href="/">
            <h3>Home</h3>
          </Link>
          <Link href="/empresa">
            <h3>Empresa</h3>
          </Link>
          <Link href="/produtos">
            <h3>Produtos</h3>
          </Link>
          {productsJson.map((item) => (
            <Link key={item.link} href={`/produtos/${item.link}`}>
              <h4>{item.titulo}</h4>
            </Link>
          ))}
          <Link href="/impermeabilizantes">
            <h3>Impermeabilizantes</h3>
          </Link>
          {impermeabilizantesJson.map((item) => (
            <Link key={item.link} href={`/impermeabilizantes/${item.link}`}>
              <h4>{item.titulo}</h4>
            </Link>
          ))}
          <Link href="/servicos">
            <h3>Serviços</h3>
          </Link>
          <Link href="/obras">
            <h3>Obras</h3>
          </Link>
          {obrasJson.map((item) => (
            <Link key={item.link} href={`/obras/${item.link}`}>
              <h4>{item.titulo}</h4>
            </Link>
          ))}
          <Link href="/informacoes">
            <h3>Informações</h3>
          </Link>
          {infoJson.map((item) => (
            <Link key={item.link} href={`/informacoes/${item.link}`}>
              <h4>{item.titulo}</h4>
            </Link>
          ))}
        </div>
      </Container>
    </MainLayout>
  );
}

import DefaultContainer from "@components/DefaultContainer";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import Link from "next/link";
import { formatLink } from "src/util/formatLink";
import styled from "styled-components";
import allLinks from "@mocs/menuLinks.json";

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
    <>
      <Header />
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
          <Link href="/produtos">
            <h3>Produtos</h3>
          </Link>
          {allLinks.produtos.map((item) => (
            <Link key={item} href={`/produtos/${formatLink(item)}`}>
              <h4>{item}</h4>
            </Link>
          ))}
          <Link href="/servicos">
            <h3>Serviços</h3>
          </Link>
          <Link href="/obras">
            <h3>Obras</h3>
          </Link>
          {allLinks.obras.map((item) => (
            <Link key={item} href={`/obras/${formatLink(item)}`}>
              <h4>{item}</h4>
            </Link>
          ))}
          <Link href="/informacoes">
            <h3>Informações</h3>
          </Link>
          {allLinks.informacoes.map((item) => (
            <Link key={item} href={`/obras/${formatLink(item)}`}>
              <h4>{item}</h4>
            </Link>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}

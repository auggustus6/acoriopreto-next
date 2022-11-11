import DefaultContainer from "@components/DefaultContainer";
import PagePath from "@components/PagePath";
import styled from "styled-components";
import informacoesJson from "@mocs/informacoes.json";
import ImageShowcase from "@components/ImageShowcase";
import MainLayout from "../MainLayout";

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

export default function InformacoesTemplates() {
  const links = informacoesJson.map((info) => {
    return {
      image: `/img/informacoes-page/${info.imagens[0]}`,
      link: `/informacoes/${info.link}`,
      title: info.titulo,
    };
  });
  return (
    <>
      <MainLayout pageTitle="Informações - AçoRio">
        <Container>
          <PagePath paths={[{ name: "Home", link: "/" }]}>Produtos</PagePath>
          <h1>Informações</h1>
          <h3>Conheça todas as Informações da AçoRio:</h3>
          <ImageShowcase links={links} />
        </Container>
      </MainLayout>
    </>
  );
}

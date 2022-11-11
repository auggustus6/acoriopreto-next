import DefaultContainer from "@components/DefaultContainer";
import PagePath from "@components/PagePath";
import styled from "styled-components";
import ImageShowcase from "@components/ImageShowcase";
import impermeabilizantesJson from "@mocs/impermeabilizantes.json";
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

export default function ImpermeabilizanteTemplate() {
  const links = impermeabilizantesJson.map((item) => {
    return {
      image: `/img/impermeabilizantes-page/${item.imagem}`,
      link: `/impermeabilizantes/${item.link}`,
      title: item.titulo,
    };
  });
  return (
    <MainLayout pageTitle="Impermeabilizantes - AçoRio">
      <Container>
        <PagePath paths={[{ name: "Home", link: "/" }]}>Impermeabilizantes</PagePath>
        <h1>Impermeabilizantes</h1>
        <h3>Conheça nossos impermeabilizantes:</h3>
        <ImageShowcase links={links} />
      </Container>
    </MainLayout>
  );
}

import DefaultContainer from "@components/DefaultContainer";
import PagePath from "@components/PagePath";
import { formatLink } from "src/util/formatLink";
import styled from "styled-components";
import ImageShowcase from "@components/ImageShowcase";
import MainLayout from "../MainLayout";

import ferramentasJson from "@mocs/ferramentas.json";

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

export default function FerramentasTemplate() {
  const images = ferramentasJson.map((ferr) => ferr.link);
  const links = images.map((item) => {
    return {
      image: `/img/ferramentas-page/${item}.jpg`,
      link: `ferramentas/${item}`,
      title: item,
    };
  });

  return (
    <>
      <MainLayout pageTitle="Produtos - AçoRio">
        <Container>
          <PagePath
            paths={[
              { name: "Home", link: "/" },
              { name: "Produtos", link: "/produtos" },
            ]}
          >
            Ferramentas
          </PagePath>
          <h1>Ferramentas</h1>
          <h3>Conheça nossos ferramentas:</h3>
          <ImageShowcase links={links} />
        </Container>
        <div style={{paddingTop: "6rem"}}></div>
      </MainLayout>
    </>
  );
}

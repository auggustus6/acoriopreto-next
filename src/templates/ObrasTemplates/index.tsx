import DefaultContainer from "@components/DefaultContainer";
import PagePath from "@components/PagePath";
import { formatLink } from "src/util/formatLink";
import styled from "styled-components";
import allLinks from "@mocs/menuLinks.json";
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

export default function ObrasTemplate() {
  const links = allLinks.obras.map((obra) => {
    return {
      image: `/img/construcao-page/${formatLink(obra)}.jpg`,
      link: `/obras/${formatLink(obra)}`,
      title: obra,
    };
  });
  return (
    <MainLayout pageTitle={links[0].title}>
      <Container>
        <PagePath paths={[{ name: "Home", link: "/" }]}>Obras</PagePath>
        <h1>Obras</h1>
        <h3>Conheça nossos obras:</h3>

        <ImageShowcase links={links} />
      </Container>
    </MainLayout>
  );
}

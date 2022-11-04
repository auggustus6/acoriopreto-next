import DefaultContainer from "@components/DefaultContainer";
import styled from "styled-components";

export const Container = styled(DefaultContainer)`
  margin: 0.4rem 0 4rem 0;
  .content {
    flex-direction: column;
    align-items: flex-start;
  }
  img {
    width: 100%;
    height: auto;
  }
  h1,
  h3 {
    color: ${(p) => p.theme.palette.secondary.main};
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  padding: 0.6rem 2rem;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0.6rem 0;
  }
`;
export const MapContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 0.9rem;
    color: ${(p) => p.theme.palette.secondary.main};
  }

  div {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  @media (max-width: 780px) {
    iframe {
      margin-top: 1rem;
    }
  }
`;

import styled from "styled-components";
import { DefaultContainer } from "./defaultContainer";

export const Container = styled.div`
  margin: 0 auto;
`;

export const BannerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  min-height: 14rem;
  background: ${(p) => p.theme.palette.secondary.main};
  padding: 1rem;

  h1 {
    max-width: ${(p) => p.theme.maxWidth};
    text-align: center;
    color: white;

    @media (max-width: 720px) {
      & {
        font-size: 1.8rem;
      }
    }
  }
`;

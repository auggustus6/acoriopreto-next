import DefaultContainer from "@components/DefaultContainer";
import styled from "styled-components";

export const SectionContainer = styled(DefaultContainer)`
  margin: 4rem 0;
  .content {
    flex-direction: column;
    h2 {
      font-size: 2rem;
      color: ${(p) => p.theme.palette.secondary.main};
    }
  }
`;

export const SubSection = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  max-width: calc(${(p) => p.theme.maxWidth} - 3rem);
  padding-left: 2rem;
  padding-right: 0.5rem;

  div {
    flex: 3;
  }
  h3 {
    margin-bottom: 1rem;
    color: ${(p) => p.theme.palette.secondary.main};
  }

  span {
    flex: 1;
    img {
      max-width: 270px;
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 720px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 3rem;
  gap: 1.4rem;
  h3 {
    color: ${(p) => p.theme.palette.secondary.main};
  }
`;

import DefaultContainer from "@components/DefaultContainer";
import Image from "next/image";
import styled from "styled-components";

interface SectionData {
  $isInverse?: boolean;
}

export const Container = styled(DefaultContainer)`
  margin: 0.4rem 0 2rem 0;
  .content {
    flex-direction: column;
    align-items: flex-start;
  }

  h1,
  h3 {
    color: ${(p) => p.theme.palette.secondary.main};
  }
`;

export const Banner = styled(Image)`
  width: 100%;
  height: auto;
`;

export const Section = styled.section<SectionData>`
  display: flex;
  width: 100%;
  margin: 2rem 0;
  flex-direction: ${(p) => (p.$isInverse ? "row-reverse" : "row")};

  gap: 2rem;

  h3 {
    margin-bottom: 2rem;
  }

  ul {
    list-style: initial;
    margin-left: 3rem;
    font-size: 0.95rem;
    margin-top: 1rem;
  }

  p {
    margin: 1rem 0;
  }

  img {
    width: 40%;
    height: auto;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      height: 300px;
      width: auto;
      object-fit: cover;
    }
  }
`;


import DefaultContainer from "@components/DefaultContainer";
import styled from "styled-components";

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

export const Section = styled.section`
  display: flex;
  width: 100%;
  gap: 3rem;
  margin-top: 2rem;
  justify-content: center;

  img {
    border-radius: 5px;
    transition: transform 0.3s;

    width: 100%;
    height: auto;
    @media (max-width: 769px) {
      width: 90vw !important;
      height: 90vw !important;
      object-fit: cover;
    }

    :hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 780px) {
    flex-direction: column-reverse !important;

    div {
      flex: none !important;
    }

    .image {
      margin: 0 auto;
      img {
        width: 400px;
        height: 400px;
        object-fit: cover;
      }
    }
  }

  .image {
    flex: 0.75;
    overflow: hidden;
    border-radius: 5px;
  }

  div {
    flex: 1;
  }

  h3 {
    margin-bottom: 2rem;
  }
  p {
    margin: 1rem 0;
  }

  ul {
    list-style: initial;
    margin-left: 3rem;
  }

  ul li {
    font-size: 0.9rem;
    margin: 0.4rem 0;
  }
`;

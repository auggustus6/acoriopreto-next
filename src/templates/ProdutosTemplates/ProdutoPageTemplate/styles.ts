import DefaultContainer from "@components/DefaultContainer";
import styled from "styled-components";

export const Container = styled(DefaultContainer)`
  margin: 0.4rem 0 2rem 0;
  margin-bottom: 4rem;
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

export const Content = styled.article`
  display: flex;
  width: 100%;
  gap: 2rem;

  main {
    flex: 3;
    width: 100%;

    p {
      margin-bottom: 1rem;
    }

    ul {
      list-style: initial;
      margin-top: 1rem;
      margin-left: 2rem;
    }
    li {
      margin-top: 0.2rem;
    }
  }

  p {
    margin-top: 3rem;
  }

  img {
    float: right;
    width: 40%;
    height: auto;
    margin-left: 1rem;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 780px) {
    flex-direction: column;

    img {
      float: none;
      margin: 0;
      width: 100%;
      height: auto;
      text-align: center;
      margin-top: 1rem;
    }

    aside {
      margin: 0;
      margin-top: 4rem;
    }
  }
`;

import DefaultContainer from "@components/DefaultContainer";
import styled from "styled-components";

export const Container = styled(DefaultContainer)`
  margin: 0.4rem 0 2rem 0;
  margin-bottom: 4rem;

  .small-text-copyright{
    font-size: 0.65rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: -3rem;
  }

  .content {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .social-buttons a {
    display: flex;
    align-items: center;
    padding: 0.1rem 0.4rem;
    font-size: 0.85rem;
    border-radius: 5px;
    transition: 0.3s;
  }

  .social-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 0.4rem;
    margin-bottom: 1rem;
    .facebook-share {
      background-color: #1877f2;
      color: white;
      :hover {
        background: white;
        color: #1877f2;
        box-shadow: inset 0px 0px 0px 1px #1877f2;
      }
    }
    .twitter-share {
      background: linear-gradient(to top, #cee8f1, white);
      color: #0097ce;
      font-weight: 600;
      border: 1px solid #0097ce;
      :hover {
        background: #0097ce;
        color: white;
      }
    }
  }

  img {
    width: 100%;
    height: auto;
  }
  h1,
  h2,
  .h3-title {
    color: ${(p) => p.theme.palette.secondary.main};
  }

  .h3-title {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: -1rem;
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
      margin: 2rem 0;
    }

    ul {
      list-style: initial;
      margin-top: 2.4rem;
      margin-left: 2rem;
      font-size: 0.95rem;
    }
    li {
      margin-top: 1rem;
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

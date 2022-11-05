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

  aside {
    flex: 1;
    margin-left: 2rem;
    h3 {
      font-size: 0.95rem;
      font-weight: 600;
      background: ${(p) => p.theme.palette.secondary.main};
      color: white;
      padding: 0.2rem;
      padding-left: 0.4rem;
    }

    p {
      margin-top: 0.2rem;
      text-align: center;
      font-weight: 600;
    }
    ul {
      margin-top: 1rem;
    }

    a {
      padding: 0.2rem 0;
    }

    ul li {
      font-size: 0.825rem;
      padding: 0.2rem 0;
      margin: 0.4rem 0;
      padding-left: 0.6rem;
      border-left: 2px solid #ccc;
    }

    /* trocar pra .active-nav */
    .active-nav,
    ul li:hover {
      border-color: ${(p) => p.theme.palette.secondary.main};
      color: ${(p) => p.theme.palette.secondary.main};
      background-color: rgba(33, 114, 179, 0.1);
      font-weight: 600;
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

  span {
    display: block;
    padding: 0.6rem 0;
    background: ${(p) => p.theme.palette.secondary.main};
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
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

export const ImagesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 1rem;
  cursor: pointer;

  div:last-child {
    margin-right: auto;
  }

  div {
    width: 124px;
    height: 124px;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: 5px;
    overflow: hidden;
    transition: opacity 0.3s;

    :hover {
      opacity: 0.8;
    }

    img {
      height: 100%;
      width: 100%;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
      object-fit: cover;
      transition: 0.3s;

      :hover {
        transform: scale(1.05);
      }
    }
  }
`;

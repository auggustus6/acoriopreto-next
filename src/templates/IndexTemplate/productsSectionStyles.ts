import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const ProductsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  color: ${(p) => p.theme.palette.secondary.main};

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    width: 100%;
    text-align: start;
    font-size: 1.6rem;
  }

  div {
    margin: 2rem auto 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  a {
    border-radius: 50%;
  }

  img {
    border-radius: 50%;
    transition: transform 0.2s;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImg = styled(Image)``;

export const ProductLink = styled.span`
  font-weight: 600;
  transition: transform 0.2s;
  margin: 0.4rem 1rem;
  p {
    font-size: 0.825rem;
  }
  @media (max-width: 600px) {
    a,
    img {
      width: 170px;
      height: 170px;
    }
  }
  @media (max-width: 450px) {
    margin-bottom: 1rem;
    a,
    img {
      width: 200px;
      height: 200px;
    }
  }
  &:hover {
    transform: scale(1.03);
  }
`;

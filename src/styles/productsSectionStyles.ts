import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const ProductsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 0 1rem;
  color: ${(p) => p.theme.palette.secondary.main};

  div + div {
    padding-top: 1.4rem;
    border-top: 1px solid #cccccc;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    width: 100%;
    text-align: start;
    font-size: 1.6rem;
  }

  div {
    margin: 2rem auto 3rem;
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

export const ProductImg = styled(Image)`
  &:hover {
    transform: scale(1.03);
  }
`;

export const ProductLink = styled(Link)`
  font-weight: 600;
  margin: 0.4rem 0.8rem;
  p {
    font-size: 0.825rem;
  }
  @media (max-width: 600px) {
    a,img{
      width: 170px;
      height: 170px;
    }
  }
  @media (max-width: 450px) {
    a,img{
      width: 120px;
      height: 120px;
    }
  }
`;

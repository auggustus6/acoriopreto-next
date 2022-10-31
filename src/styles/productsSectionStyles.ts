import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { DefaultContainer } from "./defaultContainer";

export const ProductsSection = styled.div`
  background-color: white;
  color: ${(p)=> p.theme.palette.secondary.main};
  
  h2{
    margin-top: 2rem;
    width: 100%;
    text-align: start;
    font-size: 1.6rem;
  }
  
  div {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  a,
  img {
    border-radius: 50%;
    transition: transform 0.2s;
    box-shadow: 1px 1px 10px 2px rgba(0,0,0,0.1);
    &:hover{
      transform: scale(1.03);
      box-shadow: 1px 1px 10px 2px rgba(0,0,0,0.1);
    }
  }
`;

export const ProductImg = styled(Image)``;

export const ProductLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: 600;
`;

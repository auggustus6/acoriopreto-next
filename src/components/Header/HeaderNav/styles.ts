import { DefaultContainer } from "@rootStyle/defaultContainer";
import Image from "next/image";
import styled from "styled-components";

interface NavProps {
  isOnTop: boolean;
}

type isOpen = { isOpen: boolean };

export const StyledHeaderNav = styled.header<NavProps>`
  position: ${(p) => (p.isOnTop ? "sticky" : "static")};
  height: 100%;
  top: ${(p) => (p.isOnTop ? "0" : "-150px")};
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 9;
  transition: top 0.1s;
`;

export const WrapContent = styled.div`
  max-width: ${(p) => p.theme.maxWidth};
  display: flex;
  align-items: center;
`;

export const HeaderContent = styled(DefaultContainer)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100vw;

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

export const StyledImage = styled(Image)<NavProps>`
  height: ${(p) => (p.isOnTop ? "3rem" : "5rem")};
  width: auto;
  margin: 1rem 0;
  transition: height 0.3s;

  @media (max-width: 900px) {
    height: ${(p) => (p.isOnTop ? "2.4rem" : "4rem")};
  }
`;

export const NavBar = styled.div<isOpen>`
  position: relative;

  li {
    white-space: nowrap;
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
      font-size: 0.8rem;
    }
  }

  nav ul li ul {
    position: absolute;
    left: 0;
    top: 100%;
    display: none;
    flex-direction: column;
    z-index: 1;
    background: ${(p) => p.theme.palette.primary.main};

    li {
      padding: 0.6rem 2.6rem 0.6rem 1rem;
      text-align: start;
    }
  }

  nav ul li:hover > ul {
    display: flex;
    li {
      filter: brightness(1.2);
    }
  }

  nav ul {
    display: flex;
    gap: 0.2rem;
    font-size: 0.9rem;
  }

  nav ul li {
    position: relative;
    padding: 0.4rem 0.5rem;
    margin: 0 0.01rem;
    transition: background 0.1s;
    cursor: pointer;
    :hover {
      background: ${(p) => p.theme.palette.primary.main};
      color: white;
    }
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

export const CloseButton = styled.div`
  height: 20px;
  width: 20px;
  background: red;
  cursor: pointer;
  display: none;
  transform: translate(-30px);

  @media (max-width: 780px) {
    display: block;
  }
`;

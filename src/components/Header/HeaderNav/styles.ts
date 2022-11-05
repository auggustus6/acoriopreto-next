import DefaultContainer from "@components/DefaultContainer";
import Image from "next/image";
import styled, { css } from "styled-components";

interface NavProps {
  top: boolean;
}

type isOpen = { open: boolean };

export const StyledHeaderNav = styled(DefaultContainer)<NavProps>`
  position: ${(p) => (p.top ? "fixed" : "static")};
  top: 0;
  background: white;
  z-index: 2;
  transition: top 0.1s;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.2);

  .content {
    align-items: center;
  }
`;

export const HeaderContent = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 780px) {
    grid-column-start: 1;
    grid-row-start: 1;
    justify-self: center;
  }
`;

export const StyledImage = styled(Image)<NavProps>`
  height: ${(p) => (p.top ? "3rem" : "5rem")};
  width: auto;
  margin: 1rem 0;
  transition: height 0.3s;

  @media (max-width: 900px) {
    height: ${(p) => (p.top ? "2.4rem" : "4rem")};
  }
`;

export const NavBar = styled.div<isOpen>`
  position: relative;
  color: #444444;

  li {
    white-space: nowrap;
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
      font-size: 0.8rem;
    }
  }

  ul {
    max-height: 450px;
  }

  a {
    width: 100%;
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

  nav {
    right: -100vw;
    top: 0;
    z-index: 10;
    /* responsividade aqui */
    @media (max-width: 780px) {
      visibility: ${(p) => (p.open ? "visible" : "hidden")};
      position: fixed;
      right: ${(p) => (p.open ? "0" : "-100vw")};
      width: 70vw;
      height: 100vh;
      background: ${(p) => p.theme.palette.primary.main};
      padding: 1.4rem;
      transition: all 0.4s;

      /* .hide-mobile {
        display: none;
      } */

      svg {
        color: white;
      }

      ul {
        margin-top: 2rem;
        flex-direction: column;
        align-items: center;
      }

      ul li {
        width: 100%;
        justify-content: center;
        font-size: 1rem;
        height: 3rem;
        color: white;

        :hover {
          background: rgba(255, 255, 255, 0.2);
        }
        svg {
          position: absolute;
          right: 0;
        }
      }

      ul li ul {
        width: 100%;
        margin: 0;
      }

      ul li ul li {
        margin-bottom: -4px;
        padding: 0;
        width: 100%;
        background: white;
        color: black;
        white-space: normal;
        text-align: center;
      }
    }
  }
`;

export const CloseButton = styled.div`
  height: 30px;
  width: 30px;
  cursor: pointer;
  display: none;
  transition: transform 0.2s;

  @media (max-width: 780px) {
    display: block;
  }

  :hover {
    transform: scale(1.1);
  }
`;

import { DefaultContainer } from "@rootStyle/defaultContainer";
import Image from "next/image";
import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.2rem 0;
  background: ${(p) => p.theme.palette.primary.main};
  color: ${(p) => p.theme.palette.primary.contrastText};
  white-space: nowrap;
`;
export const InfoContent = styled(DefaultContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  span {
    display: flex;
    align-items: center;
    font-size: 0.8125rem;
    font-weight: 500;
    margin-left: 0.1rem;
  }
  @media (max-width: 720px) {
    & {
      flex-direction: column;
    }
    span {
      flex-direction: column;
      svg {
        transform: scale(0.8);
      }
    }
  }

  @media (max-width: 400px) {
    span {
      display: none;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const HeaderContent = styled(DefaultContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    & {
      justify-content: center;
    }
    nav {
      display: none;
    }
  }

  nav ul {
    display: flex;
    gap: 0.2rem;
    font-size: 0.9rem;
  }

  nav ul li {
    position: relative;
    padding: 0.4rem 0.6rem;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background: ${(p) => p.theme.palette.primary.main};
      color: ${(p) => p.theme.palette.primary.contrastText};
    }
  }
`;

export const StyledImage = styled(Image)`
  height: 5rem;
  width: auto;
  margin: 1rem 0;
`;

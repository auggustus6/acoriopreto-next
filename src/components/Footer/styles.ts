import DefaultButton from "@components/Buttons/DefaultButton";
import { DefaultContainer } from "@rootStyle/defaultContainer";
import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  background: #333;
  padding: 2rem 0;
  color: white;
`;

export const Content = styled(DefaultContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }
  strong,
  span {
    font-size: 0.9rem;
  }
  p {
    font-size: 0.8rem;
  }

  span strong {
    font-size: 1.2rem;
  }

  nav {
    @media (max-width: 450px) {
      margin: 0;
      width: 90vw;
    }
  }

  nav ul {
    display: flex;
    font-size: 0.8rem;
    gap: 0.6rem;
    white-space: nowrap;

    @media (max-width: 450px) {
      flex-direction: column;
      flex-wrap: wrap;
      max-height: 40px;
      text-align: center;
    }

    li {
      cursor: pointer;
    }

    li:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 980px) {
    flex-direction: column-reverse;
    p, strong{
      text-align: center;
      width: 95vw;
    }

    .info-footer{
      text-align: center;
      width: 95vw;
    }
  }
`;

export const FooterNav = styled.div`
  align-items: flex-end !important;
  @media (max-width: 980px) {
    flex-direction: column !important;
    align-items: center !important;
    margin-bottom: 1rem;
  }
`;

export const IconsContainer = styled.span`
  display: flex;
  margin-top: 1rem;
  gap: 0.4rem;
`;

export const StyledButton = styled.a`
  display: flex;
  padding: 0.7rem 0.8rem;
  border-radius: 10px;
  background: ${(p) => p.theme.palette.secondary.main};
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

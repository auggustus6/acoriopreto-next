import DefaultContainer from "@components/DefaultContainer";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled(DefaultContainer)`
  background: #333;
  padding-top: 2rem;
  .content {
    flex-direction: column;
  }
`;

export const Content = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;

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
    p,
    strong {
      text-align: center;
      width: 95vw;
    }

    .info-footer {
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

export const SubFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0;
  p {
    font-size: 0.6rem;
    color: white;
  }

  div {
    display: flex;
    gap: 0.6rem;
  }

  a{
    display: flex;
    align-items: center;
    color: white;
    font-size: 0.8rem;
    gap: 0.1rem;
  }

  a span {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    color: white;

    gap: 0.1rem;
    p {
      background: white;
      padding: 0 0.3rem;
      color: #333;
      font-weight: 600;
    }
  }
`;

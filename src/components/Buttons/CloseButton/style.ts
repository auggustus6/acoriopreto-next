import styled from "styled-components";

interface ButtonProps {
  isOpen: boolean;
}

export const Container = styled.div<ButtonProps>`
  position: absolute;
  left: 1rem;
  --button-size: 34px;
  display: none;
  align-items: center;
  min-height: var(--button-size);
  max-height: var(--button-size);
  min-width: var(--button-size);
  max-width: var(--button-size);
  cursor: pointer;

  @media (max-width: 720px) {
    & {
      display: flex;
    }
  }

  div {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: ${(p) => (p.isOpen ? "none" : "white")};
    border-radius: 5px;
    transition: background-color 0.2s;

    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: white;
      border-radius: 5px;
      transition: all 0.2s;
    }

    &::after {
      top: ${(p) => (p.isOpen ? "0" : "10px")};
      transform: ${(p) => (p.isOpen ? "rotate(-45deg)" : "0")};
    }

    &::before {
      top: ${(p) => (p.isOpen ? "0" : "-10px")};
      transform: ${(p) => (p.isOpen ? "rotate(45deg)" : "0")};
    }
  }
`;

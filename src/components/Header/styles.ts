import { DefaultContainer } from "@rootStyle/defaultContainer";
import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.2rem 1rem;
  background: ${(p) => p.theme.palette.primary.main};
  color: ${(p) => p.theme.palette.primary.contrastText};
  white-space: nowrap;
`;
export const InfoContent = styled(DefaultContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: white;
  span {
    display: flex;
    align-items: center;
    font-size: 0.8125rem;
    font-weight: 500;
    margin-left: 0.1rem;
  }
  @media (max-width: 780px) {
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


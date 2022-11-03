import DefaultContainer from "@components/DefaultContainer";
import styled from "styled-components";

export const InfoContainer = styled(DefaultContainer)`
  background: ${(p) => p.theme.palette.primary.main};
  color: ${(p) => p.theme.palette.primary.contrastText};
  white-space: nowrap;

  .content {
    justify-content: space-between;
    padding: 1.2rem 0rem;
  }

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
      align-items: flex-start;
      svg {
        transform: scale(0.8);
      }
    }
  }

  @media (max-width: 500px) {
    span {
      display: none;
    }
    .content {
      justify-content: center;
    }
  }
  /* justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.2rem 1rem; */
`;
export const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: white;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  a{
    display: flex;
    align-items: center;
  }
`;

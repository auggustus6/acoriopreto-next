import styled from "styled-components";

export const Container = styled.button`
  padding: 0.8rem 3rem;
  background: ${(p) => p.theme.palette.secondary.main};
  color: ${(p) => p.theme.palette.secondary.contrastText};
  font-size: 0.9rem;
`;

import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  padding: 0.7rem 3rem;
  background: ${(p) => p.theme.palette.secondary.main};
  color: ${(p) => p.theme.palette.secondary.contrastText};
  font-size: 0.9rem;
  margin: 0 auto;
  border-radius: 6px;
`;

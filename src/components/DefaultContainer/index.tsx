import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: ${(p) => p.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
`;

export default function DefaultContainer({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Container className={className}>
      <Content className="content">{children}</Content>
    </Container>
  );
}

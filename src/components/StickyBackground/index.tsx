import React from "react";
import styled from "styled-components";

interface StickyBackgroundProps {
  backgroundUrl: string;
  height?: number;
}

const Container = styled.div<StickyBackgroundProps>`
  height: ${(p) => p.height}px;
`;

export default function StickyBackground({
  backgroundUrl,
  height = 200,
}: StickyBackgroundProps) {
  console.log({ backgroundUrl });

  return <Container backgroundUrl={backgroundUrl} height={height}></Container>;
}

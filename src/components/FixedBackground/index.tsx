import React from "react";
import styled from "styled-components";

interface FixedBackgroundProps {
  backgroundUrl: string;
  customHeight?: number;
  fixed?: boolean;
}

const Container = styled.div<FixedBackgroundProps>`
  height: ${(p) => p.customHeight}px;
  background: url(${(p) => p.backgroundUrl}) no-repeat center center;
  background-size: cover;
  width: 100%;
`;

const FixedContainer = styled.div<FixedBackgroundProps>`
  height: ${(p) => p.customHeight}px;

  overflow: hidden;
  position: relative;

  &::before {
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    background: url(${(p) => p.backgroundUrl}) no-repeat center center;
    background-size: cover;
    will-change: transform;
    z-index: -1;
  }
`;

export default function FixedBackground({
  backgroundUrl,
  customHeight = 200,
  fixed = false,
}: FixedBackgroundProps) {
  if (fixed) {
    return <FixedContainer backgroundUrl={backgroundUrl} customHeight={customHeight} />;
  }

  return <Container backgroundUrl={backgroundUrl} customHeight={customHeight}/>;
}

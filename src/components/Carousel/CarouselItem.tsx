import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface BackgroundProps {
  url?: string;
}

const Background = styled.div<BackgroundProps>`
  min-height: 23vw;
  background: url(${(p) => p.url});
  background-size: cover;
  background-position: center;
`;

interface CarouselItemProps {
  imageLink: string;
}

export default function CarouselItem({ imageLink }: CarouselItemProps) {
  return (
    <Link href={""}>
      <span>
        <Background url={imageLink} />
      </span>
    </Link>
  );
}

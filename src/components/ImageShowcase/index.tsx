import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ImagesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1rem;
  gap: 2rem;

  a {
    display: flex;
    align-content: center;
    flex-direction: column;
    max-width: 215px;
    width: 100%;
    margin-bottom: 2rem;
    font-size: 0.8rem;
    overflow: hidden;
    font-weight: 600;
    gap: 0.4rem;
    color: black;
    :hover {
      opacity: 0.8;
    }

    img {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    }
  }
`;

interface ImageShowcaseProps {
  links: {
    image: string;
    link: string;
    title: string;
  }[];
}

export default function ImageShowcase({ links }: ImageShowcaseProps) {
  return (
    <ImagesContainer>
      {links.map((link) => (
        <Link key={link.link} href={`${link.link}`}>
          <span style={{ width: "215px", height: "215px", position: "relative" }}>
            <Image
              src={`${link.image}`}
              fill
              alt={`foto ilustrativa de ${link.title?.toLowerCase()}`}
              style={{ objectFit: "contain" }}
            />
          </span>
          <span>{link.title}</span>
        </Link>
      ))}
    </ImagesContainer>
  );
}

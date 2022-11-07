import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatLink } from "src/util/formatLink";
import styled from "styled-components";

interface SimiliarPosts {
  path: string;
  imageFolderPath: string;
  posts: {
    title: string;
    image: string;
    link: string;
  }[];
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: #666666;
  gap: 0.2rem;

  a {
    display: flex;
    align-items: center;
    text-align: start;

    gap: 1rem;
    padding: 1rem 1.4rem;
    height: 6rem;
    width: 100%;
    background: #e8e8e8;
    border-left: 3px solid ${(p) => p.theme.palette.primary.main};
    transition: 0.3s;
    :hover {
      background: #d8d8d8;
      border-left: 3px solid ${(p) => p.theme.palette.secondary.main};
      color: ${(p) => p.theme.palette.secondary.main};
    }
  }

  img {
    min-width: 82px;
    min-height: 82px;
    max-width: 82px;
    max-height: 82px;

    object-fit: contain;
    margin: 0;
  }
`;

export default function SimiliarPosts({ path, posts, imageFolderPath }: SimiliarPosts) {
  return (
    <Container>
      {posts.map((post) => (
        <Link key={post.title} href={`${path}/${post.link}`}>
          <Image src={`${imageFolderPath}/${post.image}`} width={82} height={82} alt={""} />
          <h3>{post.title}</h3>
        </Link>
      ))}
    </Container>
  );
}

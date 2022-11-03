import { ReactNode } from "react";
import styled from "styled-components";

import { GiHouse as HomeIcon } from "react-icons/gi";
import Link from "next/link";

interface PagePathProps {
  paths: {
    name: string;
    link: string;
  }[];
  children: ReactNode;
}

const Container = styled.span`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  font-size: 0.825rem;
  font-weight: 300;

  strong {
    font-weight: 600;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.1rem;
  }

  a:hover {
    opacity: 0.7;
  }
`;

export default function PagePath({ paths, children }: PagePathProps) {
  return (
    <Container>
      {paths.map((path, i) => (
        <>
          <Link href={path.link} key={i}>
            {i == 0 && <HomeIcon size={14} />}
            {path.name}
          </Link>{" "}
          »
        </>
      ))}
      <strong>{children}</strong>
    </Container>
  );
}

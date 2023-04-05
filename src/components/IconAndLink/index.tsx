import Link from "next/link";
import { ReactNode } from "react";
import { StyledLink } from "./styles";

interface IconAndLinkProps {
  link: string;
  text?: string;
  icon: ReactNode;
  rel?: string;
  title?: string;
  className?: string;
}

export default function IconAndLink({
  link,
  icon,
  text,
  rel,
  title,
  className,
}: IconAndLinkProps) {
  return (
    <Link href={link} rel={rel}>
      <span>
        <StyledLink title={title} className={className}>
          {icon}
          {text}
        </StyledLink>
      </span>
    </Link>
  );
}

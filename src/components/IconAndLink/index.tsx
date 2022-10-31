import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { IconType } from "react-icons";
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
    <StyledLink href={link} rel={rel} title={title} className={className}>
      {icon}
      {text}
    </StyledLink>
  );
}

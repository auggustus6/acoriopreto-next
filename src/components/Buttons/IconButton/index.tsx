import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "./style";

interface CloseButtonProps {
  onClick: () => void;
  children?: ReactNode;
  link?: boolean;
  href?: string;
}

export default function IconButton({
  onClick,
  children,
  link = false,
  href = "",
}: CloseButtonProps) {
  function handleButton() {
    onClick();
  }

  return !link ? (
    <Container onClick={onClick}>{children}</Container>
  ) : (
    <Link href={href}>
      <span>
        <Container onClick={onClick}>{children}</Container>
      </span>
    </Link>
  );
}

import Link from "next/link";
import { ReactNode, useState } from "react";
import { Container } from "./style";

interface CloseButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

export default function CloseButton({ onClick, children }: CloseButtonProps) {
  function handleButton() {
    onClick && onClick();
  }

  return <Container onClick={onClick}>{children}</Container>;
}

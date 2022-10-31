import { ReactNode } from "react";
import { DropDownContainer } from "./styles";

interface DropDownMenuProps {
  children: ReactNode[];
}

export default function DropDownMenu({ children }: DropDownMenuProps) {
  return <DropDownContainer>{children}</DropDownContainer>;
}

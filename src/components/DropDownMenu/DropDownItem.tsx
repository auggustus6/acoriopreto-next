import Link from "next/link";
import { ReactNode } from "react";

interface DropDownItemProps{
  children: ReactNode;
}

export default function DropDownItem({children}:DropDownItemProps) {
  return (
    <li>
      <Link href="">{children}</Link>
    </li>
  );
}

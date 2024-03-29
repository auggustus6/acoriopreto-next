import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { formatLink } from "src/util/formatLink";
import { AsideContainer } from "./styles";

interface AsideNavProps {
  links: {
    href: string;
    text: string;
  }[];
  title: string;
}

export default function AsideNav({ links, title }: AsideNavProps) {
  const router = useRouter();
  const routeLink = router.asPath.split("/")?.slice(-1)[0];

  return (
    <AsideContainer>
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.href} className={link.href == routeLink ? "active-nav" : ""}>
            <Link href={`${link.href}`}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <span>ENTRE EM CONTATO PELO TELEFONE</span>
      <p className="phone-number">
        <a href="tel:17 3238-3191">17 3238-3191</a>
      </p>
    </AsideContainer>
  );
}

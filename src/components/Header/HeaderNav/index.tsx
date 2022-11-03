import React, { useCallback, useEffect, useState } from "react";
import { StyledHeaderNav, HeaderContent, StyledImage, NavBar, CloseButton } from "./styles";
import Logo from "@images/logo.png";
import { AiFillCaretDown as DownIcon } from "react-icons/ai";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { MdClose as CloseMenuIcon } from "react-icons/md";
import AllLinks from "@mocs/menuLinks.json";
import Link from "next/link";
import { formatLink } from "src/util/formatLink";

interface HeaderNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isOnTop: boolean;
  setIsOnTop: (value: boolean) => void;
}

export default function HeaderNav({ isOpen, setIsOpen, isOnTop, setIsOnTop }: HeaderNavProps) {
  const listenScroll = () => {
    setIsOnTop(
      document.body.scrollTop || document.documentElement.scrollTop > 200 ? true : false
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll, true);

    return window.removeEventListener("scroll", listenScroll);
  }, []);
  return (
    <>
      <StyledHeaderNav top={isOnTop}>
        <HeaderContent>
          <Link href={"/"}>
            <StyledImage
              src={Logo.src}
              top={isOnTop}
              alt="Logo Aço Rio"
              width={510}
              height={173}
            />
          </Link>
          <NavBar open={isOpen}>
            <nav>
              {isOpen && (
                <CloseButton onClick={() => setIsOpen(false)}>
                  <CloseMenuIcon size={34} />
                </CloseButton>
              )}
              <ul>
                <li>
                  <Link href="/" title="Página Inicial">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="empresa" title="Sobra a AçoRio">
                    EMPRESA
                  </Link>
                </li>
                <li>
                  {!isOpen ? (
                    <Link href="produtos" title="Produtos AçoRio">
                      PRODUTOS
                    </Link>
                  ) : (
                    "PRODUTOS"
                  )}
                  <DownIcon size={14} className="hide-mobile" />
                  <ul>
                    {AllLinks.produtos.map((linkName, i) => {
                      return (
                        <Link href={`produtos/${formatLink(linkName)}`} key={i}>
                          <li>{linkName}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <Link href="servicos" title="Serviços AçoRio">
                    SERVIÇOS
                  </Link>
                </li>
                <li>
                  {!isOpen ? (
                    <Link href="obras" title="Obras AçoRio">
                      OBRAS
                    </Link>
                  ) : (
                    "OBRAS"
                  )}
                  <DownIcon size={14} className="hide-mobile" />
                  <ul>
                    {AllLinks.obras.map((linkName, i) => {
                      return (
                        <Link href={`produtos/${formatLink(linkName)}`} key={i}>
                          <li>{linkName}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  {!isOpen ? (
                    <Link href="informacoes" title="Informações AçoRio">
                      INFORMAÇÕES
                    </Link>
                  ) : (
                    "INFORMAÇÕES"
                  )}
                  <DownIcon size={14} className="hide-mobile" />
                  <ul style={{ overflowY: "scroll" }}>
                    {AllLinks.informacoes.map((linkName, i) => {
                      return (
                        <Link href={`informacoes/${formatLink(linkName)}`} key={i}>
                          <li>{linkName}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <Link href="contato" title="Fale com a AçoRio">
                    CONTATO
                  </Link>
                </li>
              </ul>
            </nav>
          </NavBar>
        </HeaderContent>
        <CloseButton onClick={() => setIsOpen(true)}>
          <MenuIcon size={30} />
        </CloseButton>
      </StyledHeaderNav>
    </>
  );
}

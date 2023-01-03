import React, { useCallback, useEffect, useState } from "react";
import { StyledHeaderNav, HeaderContent, StyledImage, NavBar, CloseButton } from "./styles";
import Logo from "@images/logo.png";
import { AiFillCaretDown as DownIcon } from "react-icons/ai";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { MdClose as CloseMenuIcon } from "react-icons/md";
import AllLinks from "@mocs/menuLinks.json";
import Link from "next/link";
import { formatLink } from "src/util/formatLink";
import { useRouter } from "next/router";

interface HeaderNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isOnTop: boolean;
  setIsOnTop: (value: boolean) => void;
}

export default function HeaderNav({ isOpen, setIsOpen, isOnTop, setIsOnTop }: HeaderNavProps) {
  const router = useRouter();
  const listenScroll = () => {
    setIsOnTop(window.scrollY > 180 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll, true);

    return window.removeEventListener("scroll", listenScroll);
  }, []);
  return (
    <>
      <div className="nav__header">
        <StyledHeaderNav $isOnTop={isOnTop}>
          <HeaderContent>
            <Link href={"/"}>
              <StyledImage
                src={Logo.src}
                $isOnTop={isOnTop}
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
                  <Link href="/" title="Página Inicial">
                    <li className={router.pathname == "/" ? "active" : ""}>HOME</li>
                  </Link>
                  <Link href="/empresa" title="Sobra a AçoRio">
                    <li className={router.pathname == "/empresa" ? "active" : ""}>EMPRESA</li>
                  </Link>
                  <li className={router.pathname.includes("/produtos") ? "active" : ""}>
                    {!isOpen ? (
                      <span>
                        <Link href="/produtos" title="Produtos AçoRio">
                          PRODUTOS
                        </Link>
                      </span>
                    ) : (
                      "PRODUTOS"
                    )}
                    <DownIcon size={14} className="hide-mobile" />
                    <ul>
                      {AllLinks.produtos.map((linkName, i) => {
                        return (
                          <Link href={`/produtos/${formatLink(linkName)}`} key={i}>
                            <li>{linkName}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </li>
                  <li
                    className={router.pathname.includes("/impermeabilizantes") ? "active" : ""}
                  >
                    {!isOpen ? (
                      <span>
                        <Link href="/impermeabilizantes" title="Impermeabilizantes AçoRio">
                          IMPERMEABILIZANTES
                        </Link>
                      </span>
                    ) : (
                      "IMPERMEABILIZANTES"
                    )}
                    <DownIcon size={14} className="hide-mobile" />
                    <ul>
                      {AllLinks.impermeabilizantes.map((linkName, i) => {
                        return (
                          <Link href={`/impermeabilizantes/${formatLink(linkName)}`} key={i}>
                            <li>{linkName}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </li>
                  <Link href="/servicos" title="Serviços AçoRio">
                    <li className={router.pathname == "/servicos" ? "active" : ""}>
                      SERVIÇOS
                    </li>
                  </Link>
                  <li className={router.pathname.includes("/obras") ? "active" : ""}>
                    {!isOpen ? (
                      <Link href="/obras" title="Obras AçoRio">
                        OBRAS
                      </Link>
                    ) : (
                      "OBRAS"
                    )}
                    <DownIcon size={14} className="hide-mobile" />
                    <ul>
                      {AllLinks.obras.map((linkName, i) => {
                        return (
                          <Link href={`/obras/${formatLink(linkName)}`} key={i}>
                            <li>{linkName}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </li>
                  <li className={router.pathname.includes("/informacoes") ? "active" : ""}>
                    {!isOpen ? (
                      <Link href="/informacoes" title="Informações AçoRio">
                        INFORMAÇÕES
                      </Link>
                    ) : (
                      "INFORMAÇÕES"
                    )}
                    <DownIcon size={14} className="hide-mobile" />
                    <ul style={{ overflowY: "scroll" }}>
                      {AllLinks.informacoes.map((linkName, i) => {
                        return (
                          <Link href={`/informacoes/${formatLink(linkName)}`} key={i}>
                            <li>{linkName}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </li>
                  <Link href="/contato" title="Fale com a AçoRio">
                    <li className={router.pathname == "/contato" ? "active" : ""}>CONTATO</li>
                  </Link>
                </ul>
              </nav>
            </NavBar>
          </HeaderContent>
          <CloseButton onClick={() => setIsOpen(true)}>
            <MenuIcon size={30} />
          </CloseButton>
        </StyledHeaderNav>
      </div>
    </>
  );
}

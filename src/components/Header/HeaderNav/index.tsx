import React, { useCallback, useEffect, useState } from "react";
import {
  StyledHeaderNav,
  HeaderContent,
  StyledImage,
  NavBar,
  CloseButton,
  WrapContent,
} from "./styles";
import Logo from "@images/logo.png";
import { AiFillCaretDown as DownIcon } from "react-icons/ai";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

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
      <StyledHeaderNav isOnTop={isOnTop}>
        <WrapContent>
          <HeaderContent>
            <StyledImage
              src={Logo.src}
              isOnTop={isOnTop}
              alt="Logo Aço Rio"
              width={510}
              height={173}
            />
            <NavBar isOpen={isOpen}>
              <nav>
                <ul>
                  <li>HOME</li>
                  <li>EMPRESA</li>
                  <li>
                    PRODUTOS
                    <DownIcon size={14} />
                    <ul>
                      <li>HOME</li>
                      <li>EMPRESA</li>
                      <li>PRODUTOS</li>
                      <li>OBRAS</li>
                      <li>INFORMAÇÕES</li>
                      <li>CONTATO</li>
                    </ul>
                  </li>
                  <li>SERVIÇOS</li>
                  <li>
                    OBRAS
                    <DownIcon size={14} />
                    <ul>
                      <li>HOME</li>
                      <li>EMPRESA</li>
                      <li>PRODUTOS</li>
                      <li>OBRAS</li>
                      <li>INFORMAÇÕES</li>
                      <li>CONTATO</li>
                    </ul>
                  </li>
                  <li>
                    INFORMAÇÕES
                    <DownIcon size={14} />
                    <ul>
                      <li>HOME</li>
                      <li>EMPRESA</li>
                      <li>PRODUTOS</li>
                      <li>OBRAS</li>
                      <li>INFORMAÇÕES</li>
                      <li>CONTATO</li>
                    </ul>
                  </li>
                  <li>CONTATO</li>
                </ul>
              </nav>
            </NavBar>
          </HeaderContent>
          <CloseButton>
            <MenuIcon size={30} />
          </CloseButton>
        </WrapContent>
      </StyledHeaderNav>
    </>
  );
}

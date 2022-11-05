import DefaultButton from "@components/Buttons/DefaultButton";
import React from "react";
import {
  Container,
  Content,
  FooterNav,
  IconsContainer,
  StyledButton,
  SubFooter,
} from "./styles";
import { IoMdMail as EmailIcon } from "react-icons/io";
import {
  AiOutlineInstagram as IgIcon,
  AiOutlineFacebook as FaceBookIcon,
  AiOutlineHtml5 as HtmlIcon,
} from "react-icons/ai";
import { IoLogoCss3 as CssIcon } from "react-icons/io";
import Link from "next/link";
import InicioDesignImg from "./id.png";
import Image from "next/image";

export default function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <strong>AçoRio - Ferro e aço sob medida para sua construção</strong>
          <p>
            Estrada Vicinal João Parise, Nº2020 - Brejo Alegre <br />
            São José do Rio Preto-SP - CEP: 15062-000
          </p>
          <span className="info-footer">
            <a href="tel:173238-3191">
              17 <strong>3238-3191</strong>
            </a>
          </span>
        </div>
        <FooterNav>
          <nav>
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="empresa">
                <li>Empresa</li>
              </Link>
              <Link href="produtos">
                <li>Produtos</li>
              </Link>
              <Link href="servicos">
                <li>Serviços</li>
              </Link>
              <Link href="obras">
                <li>Obras</li>
              </Link>
              <Link href="informacoes">
                <li>Informações</li>
              </Link>
              <Link href="contato">
                <li>Contato</li>
              </Link>
              <Link href="mapa-site">
                <li>Mapa do site</li>
              </Link>
            </ul>
          </nav>
          <IconsContainer>
            <StyledButton href="https://www.facebook.com/acoriopreto">
              <FaceBookIcon size={20} />
            </StyledButton>

            <StyledButton href="https://www.instagram.com/acorio_aco/?utm_medium=copy_link">
              <IgIcon size={20} />
            </StyledButton>
            <StyledButton href="mailto:vitor.balbo@acoriopreto.com.br">
              <EmailIcon size={20} />
            </StyledButton>
          </IconsContainer>
        </FooterNav>
      </Content>
      <SubFooter>
        <p>Copyright © AçoRio. (Lei 9610 de 19/02/1998)</p>
        <div>
          <a href="https://validator.w3.org/check?uri=https://www.acoriopreto.com.br/">
            <span>
              <HtmlIcon size={14} />
              <p>W3C</p>
            </span>
          </a>
          <a href="http://jigsaw.w3.org/css-validator/validator?uri=https://www.acoriopreto.com.br/&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=pt-BR">
            <span>
              <CssIcon size={14} />
              <p>W3C</p>
            </span>
          </a>
          <a href="https://www.iniciodesign.com.br/">
            <Image src={InicioDesignImg.src} width={16} height={16} alt="Logo Inicio Design" />
          </a>
        </div>
      </SubFooter>
    </Container>
  );
}

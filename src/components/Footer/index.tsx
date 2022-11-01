import DefaultButton from "@components/Buttons/DefaultButton";
import React from "react";
import { Container, Content, FooterNav, IconsContainer, StyledButton } from "./styles";
import { IoMdMail as EmailIcon } from "react-icons/io";
import {
  AiOutlineInstagram as IgIcon,
  AiOutlineFacebook as FaceBookIcon,
} from "react-icons/ai";

export default function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <strong>AçoRio - Ferro e aço sob medida para sua contrução</strong>
          <p>
            Estrada Vicinal João Parise, Nº2020 - Brejo Alegre <br />
            São José do Rio Preto-SP - CEP: 15062-000
          </p>
          <span className="info-footer">
            17 <strong>3238-3191</strong>
          </span>
        </div>
        <FooterNav>
          <nav>
            <ul>
              <li>Home</li>
              <li>Empresa</li>
              <li>Produtos</li>
              <li>Serviços</li>
              <li>Obras</li>
              <li>Informações</li>
              <li>Contato</li>
              <li>Mapa do site</li>
            </ul>
          </nav>
          <IconsContainer>
            <StyledButton onClick={() => {}}>
              <FaceBookIcon size={20} />
            </StyledButton>
            <StyledButton onClick={() => {}}>
              <IgIcon size={20} />
            </StyledButton>
            <StyledButton onClick={() => {}}>
              <EmailIcon size={20} />
            </StyledButton>
          </IconsContainer>
        </FooterNav>
      </Content>
    </Container>
  );
}

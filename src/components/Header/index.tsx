import { Icons, InfoContainer, InfoContent } from "./styles";
import { BsGeoAltFill as GeoIcon } from "react-icons/bs";
import { IoMdMail as EmailIcon } from "react-icons/io";
import { ImPhone as PhoneIcon } from "react-icons/im";
import {
  AiOutlineInstagram as IgIcon,
  AiOutlineFacebook as FaceBookIcon,
} from "react-icons/ai";
import HeaderNav from "./HeaderNav";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnTop, setIsOnTop] = useState(false);
  return (
    <>
      <InfoContainer>
        <span>
          <p>
            <GeoIcon size={13} />
            Estrada Vicinal João Parise,
          </p>
          <p>Nº2020 - São José do Rio Preto-SP</p>
        </span>
        <Icons>
          <a href="mailto:vitor.balbo@acoriopreto.com.br" title="Nosso email">
            <EmailIcon size={16} />
          </a>
          <a
            href="https://www.instagram.com/acorio_aco/?utm_medium=copy_link"
            title="Visite nosso perfil no instagram"
          >
            <IgIcon size={16} />
          </a>
          <a
            href="https://www.facebook.com/acoriopreto"
            title="Visite nossa página no facebook"
          >
            <FaceBookIcon size={16} />
          </a>
          <a href="tel:173238-3191" title="Clique e ligue">
            <PhoneIcon size={13} />
            17 3238-3191
          </a>
        </Icons>
      </InfoContainer>
      <HeaderNav {...{ isOpen, setIsOpen, isOnTop, setIsOnTop }} />
    </>
  );
}

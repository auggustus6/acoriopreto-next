import { DefaultContainer } from "@rootStyle/defaultContainer";
import {
  Icons,
  InfoContainer,
  InfoContent,
  HeaderNav,
  StyledImage,
  HeaderContent,
} from "./styles";
import { BsGeoAltFill as GeoIcon } from "react-icons/bs";
import { IoMdMail as EmailIcon } from "react-icons/io";
import { ImPhone as PhoneIcon } from "react-icons/im";
import {
  AiOutlineInstagram as IgIcon,
  AiOutlineFacebook as FaceBookIcon,
} from "react-icons/ai";
import IconAndLink from "@components/IconAndLink";
import CloseButton from "@components/Buttons/CloseButton";
import Image from "next/image";
import Logo from "../../../public/img/logo.png";
import DropDownMenu from "@components/DropDownMenu";
import DropDownItem from "@components/DropDownMenu/DropDownItem";

export default function Header() {
  return (
    <>
      <InfoContainer>
        <CloseButton onClose={() => {}} />
        <InfoContent>
          <span>
            <p>
              <GeoIcon size={13} />
              Estrada Vicinal João Parise,
            </p>
            <p>Nº2020 - São José do Rio Preto-SP</p>
          </span>
          <Icons>
            <IconAndLink icon={<EmailIcon size={16} />} link="#" />
            <IconAndLink icon={<IgIcon size={16} />} link="#" />
            <IconAndLink icon={<FaceBookIcon size={16} />} link="#" />
            <IconAndLink
              text="17 3238-3191"
              icon={<PhoneIcon size={13} />}
              link="tel:173238-3191"
              title="Clique e ligue"
              rel="nofollow"
            />
          </Icons>
        </InfoContent>
      </InfoContainer>
      <HeaderNav>
        <HeaderContent>
          <StyledImage src={Logo.src} alt="Logo Aço Rio" width={510} height={173} />
          <nav>
            <ul>
              <li>HOME</li>
              <li>EMPRESA</li>
              <li>
                PRODUTOS
                {/* <DropDownMenu>
                  <DropDownItem>Item 1</DropDownItem>
                  <DropDownItem>Item 2</DropDownItem>
                </DropDownMenu> */}
              </li>
              <li>OBRAS</li>
              <li>INFORMAÇÕES</li>
              <li>CONTATO</li>
            </ul>
          </nav>
        </HeaderContent>
      </HeaderNav>
    </>
  );
}

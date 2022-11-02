import { Icons, InfoContainer, InfoContent } from "./styles";
import { BsGeoAltFill as GeoIcon } from "react-icons/bs";
import { IoMdMail as EmailIcon } from "react-icons/io";
import { ImPhone as PhoneIcon } from "react-icons/im";
import {
  AiOutlineInstagram as IgIcon,
  AiOutlineFacebook as FaceBookIcon,
} from "react-icons/ai";
import IconAndLink from "@components/IconAndLink";
import HeaderNav from "./HeaderNav";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnTop, setIsOnTop] = useState(false);
  return (
    <>
      <InfoContainer>
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
      <HeaderNav {...{ isOpen, setIsOpen, isOnTop, setIsOnTop }} />
    </>
  );
}

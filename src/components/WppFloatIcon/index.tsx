import Image from "next/image";
import React from "react";
import { WhatsAppLink } from "./styles";
import WppIcon from "./wppicon.png";

export default function WppFloatIcon() {
  return (
    <WhatsAppLink
      href="https://web.whatsapp.com/send?phone=5517982060551&text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20ofertas%20da%20A%C3%A7oRio%20-%20Ferro%20e%20a%C3%A7o%20sob%20medida%20para%20sua%20contru%C3%A7%C3%A3o"
      title="Fale conosco!"
      target="_blank"
    >
      <Image src={WppIcon.src} width={70} height={70} alt="WhatsApp logo" />
    </WhatsAppLink>
  );
}

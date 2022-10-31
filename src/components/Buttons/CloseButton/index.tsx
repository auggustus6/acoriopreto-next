import { useState } from "react";
import { Container } from "./style";

interface CloseButtonProps {
  onClose: () => void;
}

export default function CloseButton({ onClose }: CloseButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleButton() {
    onClose();
    setIsOpen(!isOpen);
    console.log("oi");
  }

  return (
    <Container onClick={handleButton} isOpen={isOpen}>
      <div></div>
    </Container>
  );
}

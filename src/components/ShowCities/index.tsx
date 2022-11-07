import { useState } from "react";
import { Container } from "./style";
import citiesJson from "@mocs/cities.json";

export default function ShowCities() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <nav>
        <span onClick={() => setIsOpen(false)}>Selecione</span>
        <span className={isOpen ? "active" : ""} onClick={() => setIsOpen(true)}>
          SP
        </span>
      </nav>
      <div style={{ height: isOpen ? "320px" : "30px" }} className="cities-container">
        {!isOpen && <span style={{fontSize: "0.8rem"}}>Selecione a região do Brasil</span>}
        <main className="cities-content">
          {isOpen && citiesJson.SP.map((city) => <span key={city}>{city}</span>)}
        </main>
      </div>
    </Container>
  );
}

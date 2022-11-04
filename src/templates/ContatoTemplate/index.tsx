import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import { Container, Main, MapContainer } from "./styles";

import { CustomForm } from "./components/MyForm";

export default function ContatoTemplate() {
  return (
    <>
      <Header />
      <Container>
        <PagePath paths={[{ name: "Home", link: "/" }]}>Contato</PagePath>
        <h1>Contato</h1>
        <Main>
          <CustomForm />
          <MapContainer>
            <p>AçoRio - Ferro e aço sob medida para sua contrução</p>
            <div>
              Estrada Vicinal João Parise, Nº2020 - Brejo Alegre - São José do Rio Preto-SP -
              CEP: 15062-000
            </div>
            <div>17 3238-3191</div>
            <small>Email: vitor.balbo@acoriopreto.com.br</small>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.689066839319!2d-49.331363985070425!3d-20.844258686098573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc4cfe6f38f321%3A0x64884cbf9071dfbf!2sA%C3%A7o+Rio+Preto!5e0!3m2!1spt-BR!2sbr!4v1541620642378"
              height="350"
              style={{ border: 0, width: "100%" }}
            ></iframe>
          </MapContainer>
        </Main>
      </Container>
      <Footer />
    </>
  );
}

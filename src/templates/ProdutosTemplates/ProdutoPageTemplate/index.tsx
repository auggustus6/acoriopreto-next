import FixedBackground from "@components/FixedBackground";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import Link from "next/link";
import { Container, Content } from "./styles";
import banner from "./banner-sobre.jpg";
import Image from "next/image";
import allLinksJson from "@mocs/menuLinks.json";
import { formatLink } from "src/util/formatLink";

interface ProdutoPageTemplateData {
  product: {
    link: string;
    title: string;
    paragraphs: string[];
    list?: string[];
  };
}

export default function ProdutoPageTemplate({ product }: ProdutoPageTemplateData) {
  const { link, title, paragraphs, list } = product;
  return (
    <>
      <Header />
      <Container>
        <PagePath
          paths={[
            { name: "Home", link: "/" },
            { name: "Produtos", link: "/produtos" },
          ]}
        >
          {title}
        </PagePath>
        <h1>{title}</h1>
        <Content>
          <main>
            <h3>Confira:</h3>
            <Image
              src={`/img/produtos-page/${link}.jpg`}
              width={300}
              height={300}
              alt={`imagem ilustrativa de ${title}`}
            />
            {paragraphs?.map((text) => (
              <p key={text?.slice(0, 30)}>{text}</p>
            ))}

            {list && (
              <ul className="aside-nav">
                {list.map((text) => (
                  <li key={text?.slice(0, 30)}>{text}</li>
                ))}
              </ul>
            )}
          </main>
          <aside>
            <h3>PRODUTOS</h3>
            <ul>
              {allLinksJson.produtos.map((prod) => (
                // <li key={prod} className="active-nav">
                <li
                  key={prod}
                  className={`${prod?.toLowerCase() == title?.toLowerCase() && "active-nav"}`}
                >
                  <Link href={`${formatLink(prod)}`}>{prod}</Link>
                </li>
              ))}
              <span>ENTRE EM CONTATO PELO TELEFONE</span>
              <p>
                <a href="tel:17 3238-3191">17 3238-3191</a>
              </p>
            </ul>
          </aside>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

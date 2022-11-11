import PagePath from "@components/PagePath";
import { Container, Content } from "./styles";
import Image from "next/image";
import allLinksJson from "@mocs/menuLinks.json";
import AsideNav from "@components/AsideNav";
import MainLayout from "src/templates/MainLayout";

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
    <MainLayout
      pageTitle={title}
      descriptionMeta={title + " - " + title.slice(0, 100) + "... Saiba mais."}
    >
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
          <AsideNav title="PRODUTOS" links={allLinksJson.produtos} />
        </Content>
      </Container>
    </MainLayout>
  );
}

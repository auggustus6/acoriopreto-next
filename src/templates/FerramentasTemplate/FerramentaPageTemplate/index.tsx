import PagePath from "@components/PagePath";
import { Container, Content } from "./styles";
import Image from "next/image";

import ferramentasJson from "@mocs/ferramentas.json";

import AsideNav from "@components/AsideNav";
import MainLayout from "src/templates/MainLayout";

interface FerramentaPageTemplateData {
  ferramenta: {
    link: string;
    title: string;
    paragraphs: string[];
    list?: string[];
    footer?: string[];
  };
}

export default function FerramentaPageTemplate({ ferramenta }: FerramentaPageTemplateData) {
  const { link, title, paragraphs, list, footer } = ferramenta;

  const productsLinks = ferramentasJson.map((ferr) => {
    return { href: ferr.link, text: ferr.titulo };
  });

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
            { name: "Ferramentas", link: "/produtos/ferramentas" },
          ]}
        >
          {title}
        </PagePath>
        <h1>{title}</h1>
        <Content>
          <main>
            <h3>Confira:</h3>
            <Image
              src={`/img/ferramentas-page/${link}.jpg`}
              width={300}
              height={300}
              alt={`imagem ilustrativa de ${title}`}
            />
            {paragraphs?.map((text) => (
              <p key={text} dangerouslySetInnerHTML={{ __html: text }}></p>
            ))}

            {list && (
              <ul className="aside-nav">
                {list.map((text) => (
                  <li key={text?.slice(0, 30)}>{text}</li>
                ))}
              </ul>
            )}

            {footer?.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </main>
          <AsideNav title="PRODUTOS" links={productsLinks} />
        </Content>
      </Container>
    </MainLayout>
  );
}

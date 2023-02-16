import PagePath from "@components/PagePath";
import { Container, Content } from "./styles";
import Image from "next/image";

import produtosJson from "@mocs/produtos.json";

import AsideNav from "@components/AsideNav";
import MainLayout from "src/templates/MainLayout";
import { useRouter } from "next/router";
import ImagesContainer from "@components/ImagesContainer";

interface ProdutoPageTemplateData {
  product: {
    link: string;
    title: string;
    paragraphs: string[];
    list?: string[];
    footer?: string[];
  };
}

export default function ProdutoPageTemplate({ product }: ProdutoPageTemplateData) {
  const router = useRouter();

  const { link, title, paragraphs, list, footer } = product;

  const productsLinks = produtosJson.map((prod) => {
    return { href: prod.link, text: prod.titulo };
  });

  const gallery =
    router.asPath.includes("ponteira-de-protecao") &&
    Array(8)
      .fill(null)
      .map((_, i) => `prod(${i + 1}).jpeg`);

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

            {/* {router.asPath.includes("corte-e-dobra-de-ferragem") && (
              Array(8).fill(null).map((_, i) => <ImagesContainer title={""} images={imagens} path={"/img/informacoes-page/"} />)
            )} */}
            {gallery && (
              <ImagesContainer
                title={""}
                images={gallery}
                path={"/img/produtos-page/ponteira/"}
              />
            )}
          </main>
          <AsideNav title="PRODUTOS" links={productsLinks} />
        </Content>
      </Container>
    </MainLayout>
  );
}

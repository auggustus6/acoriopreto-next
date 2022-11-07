import { useRouter } from "next/router";
import { formatLink } from "src/util/formatLink";
import produtosJson from "@mocs/produtos.json";
import obrasJson from "@mocs/obras.json";
import { useEffect } from "react";
import { GetStaticPaths } from "next";
import allLinksJson from "@mocs/menuLinks.json";

interface RedirectProps {
  link: string;
  type: string;
}

export default function Redirect({ link, type }: RedirectProps) {
  const router = useRouter();

  useEffect(() => {
    if (link) {
      router.push(`/${type}/${formatLink(link)}`);
      return () => {};
    } else {
      router.push("/404");
      return () => {};
    }
  }, []);

  return null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  let links = allLinksJson.produtos.map((obra) => {
    return {
      params: {
        redirect: formatLink(obra),
      },
    };
  });
  links.push(
    ...allLinksJson.obras.map((obra) => {
      return {
        params: {
          redirect: formatLink(obra),
        },
      };
    })
  );
  return {
    paths: [...links],
    fallback: false,
  };
};

export const getStaticProps = async ({ req, params }: any) => {
  try {
    const { redirect } = params;

    let link = null;

    link = produtosJson.find((prod) => prod.link == redirect)?.link;
    if (link) {
      return {
        props: { type: "produtos", link },
      };
    }

    link = obrasJson.find((obra) => obra.link == redirect)?.link;
    if (link) {
      return {
        props: { type: "obras", link },
      };
    }
  } catch (error) {
    console.error({ error });
  }
  return {
    notFound: true,
  };
};

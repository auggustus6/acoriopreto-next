import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetStaticPaths } from "next";

import productsJson from "@mocs/produtos.json";
import impermeabilizantesJson from "@mocs/impermeabilizantes.json";
import infoJson from "@mocs/informacoes.json";
import obrasJson from "@mocs/obras.json";

interface RedirectProps {
  link: string;
  type: string;
}

export default function Redirect({ link, type }: RedirectProps) {
  const router = useRouter();

  useEffect(() => {
    if (link) {
      router.push(`/${type}/${link}`);
      return () => {};
    } else {
      router.push("/404");
      return () => {};
    }
  }, []);

  return null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  let links = productsJson.map((prod) => {
    return {
      params: {
        redirect: prod.link,
      },
    };
  });
  links.push(
    ...obrasJson.map((obra) => {
      return {
        params: {
          redirect: obra.link,
        },
      };
    })
  );

  links.push(
    ...impermeabilizantesJson.map((imper) => {
      return {
        params: {
          redirect: imper.link,
        },
      };
    })
  );

  links.push(
    ...infoJson.map((info) => {
      return {
        params: {
          redirect: info.link,
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

    link = productsJson.find((prod) => prod.link == redirect)?.link;
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

    link = impermeabilizantesJson.find((obra) => obra.link == redirect)?.link;
    if (link) {
      return {
        props: { type: "obras", link },
      };
    }

    link = infoJson.find((obra) => obra.link == redirect)?.link;
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

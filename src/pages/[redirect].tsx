import { useRouter } from "next/router";
import { formatLink } from "src/util/formatLink";
import productsJson from "@mocs/products.json";
import { useEffect } from "react";

interface RedirectProps {
  link: string;
  type: string;
}

export default function Redirect({ link, type }: RedirectProps) {
  const { push } = useRouter();

  useEffect(() => {
    if (link) {
      push(`/${type}/${formatLink(link)}`);
    } else {
      push(`/404`);
    }
  }, []);

  return null;
}

export const getServerSideProps = async ({ req, params }: any) => {
  try {
    const { redirect } = params;

    let link = null;

    link = productsJson.find((prod) => prod.link == redirect)?.link;
    if (link) {
      return {
        props: { type: "produtos", link },
      };
    }

    return {
      props: { type: null, link: null },
    };
  } catch (error) {
    console.error({ error });
  }
  return { props: {} };
};

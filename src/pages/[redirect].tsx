import { useRouter } from "next/router";
import { formatLink } from "src/util/formatLink";
import productsJson from "@mocs/products.json";
import obrasJson from "@mocs/obras.json";
import { useEffect } from "react";

interface RedirectProps {
  link: string;
  type: string;
}

export default function Redirect({ link, type }: RedirectProps) {
  const router = useRouter();

  useEffect(() => {
    if (link) {
      router.push(`/${type}/${formatLink(link)}`);
    } else {
      router.push(`/404`);
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

    link = obrasJson.find((obra) => obra.link == redirect)?.link;
    if (link) {
      return {
        props: { type: "obras", link },
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

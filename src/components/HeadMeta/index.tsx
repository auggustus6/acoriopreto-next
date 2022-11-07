import Head from "next/head";

interface HeadMeta {
  description?: string;
  pageTitle: string;
}

export default function HeadMeta({
  description = "Obras - a aço rio surgiu da necessidade de pequenas obras da construção civil, que não encontram empresas que as atendam de forma flexível.... Saiba mais.",
  pageTitle,
}: HeadMeta) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="AçoRio, Aço Rio, acorio" />

      <meta name="geo.position" content="-20.8448749;-49.3288551" />
      <meta name="geo.placename" content="São José do Rio Preto-SP" />
      <meta name="geo.region" content="SP-BR" />
      <meta name="ICBM" content="-20.8448749;-49.3288551" />
      <meta name="robots" content="index,follow" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href="https://www.acoriopreto.com.br/" />
      <meta name="author" content="AçoRio" />

      <meta property="og:region" content="Brasil" />
      <meta property="og:title" content="Home - AçoRio" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.acoriopreto.com.br/" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="AçoRio" />
    </Head>
  );
}

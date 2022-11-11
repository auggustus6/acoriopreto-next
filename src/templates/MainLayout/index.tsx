import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  pageTitle: string;
  descriptionMeta?: string;
}

export default function MainLayout({
  children,
  descriptionMeta = "Obras - a aço rio surgiu da necessidade de pequenas obras da construção civil, que não encontram empresas que as atendam de forma flexível.... Saiba mais.",
  pageTitle,
}: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionMeta} />
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
        <meta property="og:description" content={descriptionMeta} />
        <meta property="og:site_name" content="AçoRio" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

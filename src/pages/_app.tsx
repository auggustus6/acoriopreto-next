import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@themes/mainTheme";
import GlobalStyles from "@rootStyle/global";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

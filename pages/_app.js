import Layout from "../components/layouts/main";
import Fonts from "../components/font";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import nProgress from "nprogress";
import Router from "next/router";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/nprogress.css";
import "../styles/mdx.css";
import "../styles/dracula.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import ScrollToTop from "../components/ScrollToTop";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Fonts />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Layout router={router}>
          <ScrollToTop smooth />
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;

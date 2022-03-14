import Layout from "../components/layouts/main";
import Fonts from "../components/font";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import nProgress from "nprogress";
import Router from "next/router";
import "../styles/nprogress.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
// import "../styles/dracula.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Fonts />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;

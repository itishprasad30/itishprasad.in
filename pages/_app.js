import Layout from "../components/layouts/main";
import Fonts from "../components/font";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
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

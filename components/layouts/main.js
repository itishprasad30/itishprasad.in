import Head from "next/head";
import Footer from "./Footer";
import Navbar from "../navbar";
import NoSsr from "../no-ssr";
import VoxelDog from "../voxel-dog";

const Main = ({ children, router }) => {
  return (
    <div className="space-y-9 bg-[#F0E7DB] p-4 dark:bg-[#202023]">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Itish Prasad's homepage" />
        <meta name="author" content="Itish Prasad" />
        <meta name="author" content="itish_prasad" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@itish_prasad" />
        <meta name="twitter:creator" content="itish prasad" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Itish Prasad's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Itish Prasad - Homepage </title>
      </Head>

      <Navbar path={router.asPath} />

      <div className="mx-auto max-w-4xl  px-4 pt-4 md:px-20">
        {/* <NoSsr>
          <VoxelDog />
        </NoSsr> */}
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Main;

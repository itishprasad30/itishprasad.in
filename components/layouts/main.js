import Head from "next/head";
import Footer from "./Footer";
import Navbar from "../navbar";
import NoSsr from "../no-ssr";
import VoxelDog from "../voxel-dog";
import Seo from "./Seo";
import Header from "./Header";
import { sayHelloFlag } from "../../Constants/env";
import sayHello from "../../lib/sayHello";

let saidHello = !sayHelloFlag;

const Main = ({ children, router }) => {
  if (!saidHello) {
    sayHello();
    saidHello = true;
  }

  return (
    <div className="space-y-9 bg-[#F0E7DB] p-4 dark:bg-[#202023]">
      <Seo templateTitle="Itish Prasad " />
      {/* <Header /> */}
      <Navbar path={router.asPath} />
      <div className="mx-auto max-w-6xl  px-4 pt-4 md:px-20">
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

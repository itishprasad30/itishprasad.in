import Image from "next/image";
import NextLink from "next/link";
import userData from "../Constants/data";

import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoDiscord,
  IoLogoInstagram,
  IoArrowDownOutline,
  IoNewspaperSharp,
} from "react-icons/io5";
import useLoaded from "../hooks/useLoaded";
import clsx from "clsx";
import NoSsr from "../components/no-ssr";
import VoxelDog from "../components/voxel-dog";
import ViewCounter from "../components/ViewCounter";
import Seo from "../components/layouts/Seo";
import { trackEvent } from "../lib/analytics";
import ButtonLink from "../components/links/ButtonLink";

export default function Home() {
  const isLoaded = useLoaded();

  return (
    <div className=" max-w-4xl selection:bg-red-400 dark:selection:bg-yellow-800 ">
      <Seo templateTitle="Home Page " />
      <section className={clsx(isLoaded && "fade-in-start")}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        <div
          data-fade="1"
          className=" mb-4 items-center rounded-lg bg-gray-700 p-4 text-white opacity-80"
        >
          Hello , I am a Full Stack Developer from India.
        </div>
        <p className="hidden">
          <ViewCounter slug="landing-page" />
        </p>

        <div data-fade="2" className=" items-center justify-center md:flex">
          <div className="flex-1">
            <h1 className="mb-1 w-fit cursor-pointer rounded bg-gradient-to-r from-pink-400 to-yellow-500 px-2 text-3xl font-bold tracking-tight text-gray-200 md:text-5xl">
              Itish Prasad Sahoo
            </h1>

            <p className="mb-4 text-gray-700 dark:text-gray-200">
              FullStack Developer || Web Developer{" "}
            </p>
            <p className="mb-16 text-gray-800 dark:text-gray-200">
              I work with React Ecosystem, and write blog how to rebuild and
              redefine fundametal concepts through mental models. Believing Web
              Dev is the Future.So building a faster web. Exporing about web
              development, serverless, and React / Next.js,Tailwind Css & Apis.
            </p>
          </div>

          <div className="mt-5">
            <Image
              src="https://avatars.githubusercontent.com/u/60768713?v=4"
              alt="Profile Image"
              placeholder="blur"
              blurDataURL="https://avatars.githubusercontent.com/u/60768713?v=4"
              height={130}
              width={130}
              className="rounded-full md:rounded-2xl"
            />
          </div>
        </div>
        <div>
          <div data-fade="3">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-black underline dark:text-white md:text-3xl">
              Works
            </h2>
            <p className="mt-3 break-words   text-justify indent-sm">
              {userData.about.description}
            </p>
            <div className="flex justify-center ">
              {/* <NextLink href="/projects" className="">
                <button
                  onClick={() => trackEvent("Projects Button", "button")}
                  className="my-4 rounded-lg   bg-gradient-to-r  from-pink-400 to-yellow-500 px-3 py-2 text-white transition delay-150 duration-300 ease-in-out    "
                >
                  My PortFolio
                  <i className="ml-2 ">&gt;</i>
                </button>
              </NextLink> */}

              <div className="group relative">
                <div
                  className={clsx(
                    "absolute -inset-0.5 mt-6 animate-tilt rounded blur",
                    "bg-gradient-to-r from-yellow-300 to-green-500",
                    "dark:from-yellow-400 dark:via-pink-300",
                    "opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
                  )}
                />
                <ButtonLink
                  className="relative mt-6 bg-[#F0E7DB] dark:bg-[#202023] dark:text-white"
                  href="/projects"
                  variant="light"
                  onClick={() =>
                    trackEvent("Project Button: Projects", "Button")
                  }
                >
                  My Project Works
                </ButtonLink>
              </div>
            </div>
          </div>

          <div data-fade="4">
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-black underline dark:text-white md:text-3xl  ">
              Bio
            </h2>
            <div className="mr-2 mt-3 mb-2 flex space-x-4">
              <p className="font-bold ">2000 </p>
              <p className="font-medium">Born In Odisha, India</p>
            </div>

            <div className="mr-2 mb-2 flex space-x-4">
              <p className="font-bold ">2017 </p>
              <p className="font-medium">
                Completed My Higher Secondary Education in Science at Bhargabi
                Science College
              </p>
            </div>
            <div className="mr-2 mb-2 flex space-x-4">
              <p className="font-bold ">2021 </p>
              <p className="font-medium">
                Completed My B.tech in Computer Science and Engineering at Ajay
                Binay Insitute of Technology
              </p>
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-black underline dark:text-white md:text-3xl  ">
              I 🤍{" "}
            </h2>
            <p className="mt-3 indent-sm">
              Coding , Music ,Watching Movies, Exploring New Technologies
              ,Gaming .
            </p>
          </div>

          <div data-fade="5">
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-black underline dark:text-white md:text-3xl  ">
              Social Links{" "}
            </h2>
            <div className="mt-4 ml-4">
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center space-x-4"
                  onClick={() => trackEvent("Social Link: Twitter", "link")}
                >
                  <div className="my-4 ">&rarr;</div>
                  <IoLogoTwitter className="transition-colors group-hover:text-indigo-500  dark:hover:text-indigo-600" />

                  <p className="relative overflow-hidden font-mono  text-lg text-gray-500 hover:text-indigo-500 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-28 transform bg-indigo-400 transition duration-300 group-hover:translate-x-0"></div>
                    Twitter
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center space-x-4"
                  onClick={() => trackEvent("Social Link: Resume", "link")}
                >
                  <div className="my-4 ">&rarr;</div>
                  <IoNewspaperSharp className="transition-colors group-hover:text-green-500  dark:hover:text-green-600" />

                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 hover:text-green-600 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-28 transform bg-green-600 transition duration-300 group-hover:translate-x-0"></div>
                    Resume
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.github}
                  onClick={() => trackEvent("Social Link: Github", "link")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <IoLogoGithub className="transition-colors group-hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-600" />
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 hover:text-gray-600 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-gray-600 transition duration-300 group-hover:translate-x-0"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("Social Link: LinkedIn", "link")}
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <IoLogoLinkedin className="transition-colors group-hover:text-blue-800 " />
                  <p className=" relative overflow-hidden font-mono text-lg text-gray-500 hover:text-blue-800 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-blue-700 transition duration-300 group-hover:translate-x-0"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center space-x-4"
                  onClick={() => trackEvent("Social Link:Instagram", "link")}
                >
                  <div className="my-4">&rarr;</div>
                  <IoLogoInstagram className="transition-colors group-hover:text-pink-500 " />
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 hover:text-pink-500 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-28 transform bg-pink-500 transition duration-300 group-hover:translate-x-0"></div>
                    Instagram
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start ">
                <a
                  href={userData.socialLinks.facebook}
                  onClick={() => trackEvent("Social Link: FaceBook", "link")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <IoLogoFacebook className="transition-colors group-hover:text-indigo-700 " />
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 hover:text-blue-800 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-blue-500 transition duration-300 group-hover:translate-x-0"></div>
                    Facebook
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

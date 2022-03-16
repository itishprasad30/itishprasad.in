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

export default function Home() {
  const isLoaded = useLoaded();

  return (
    <div className=" max-w-4xl ">
      <section className={clsx(isLoaded && "fade-in-start")}>
        <div
          data-fade="1"
          className=" mb-4 items-center rounded-lg bg-gray-700 p-4 text-white opacity-80"
        >
          Hello , I am a Full Stack Developer from India.
        </div>

        <div data-fade="2" className=" items-center justify-center md:flex">
          <div className="flex-1">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              Itish Prasad
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
            <p className="indent-sm mt-3   break-words text-justify">
              {userData.about.description}
            </p>
            <div className="flex justify-center ">
              <NextLink href="/projects" className="">
                <button className="my-4 rounded-lg  bg-green-400 px-3  py-2 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-500  ">
                  My PortFolio
                  <i className="ml-2 ">&gt;</i>
                </button>
              </NextLink>
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
            <p className="indent-sm mt-3">
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
                >
                  <div className="my-4 ">&rarr;</div>
                  <IoLogoTwitter className="transition-colors group-hover:text-indigo-500  dark:hover:text-indigo-600" />

                  <p className="relative overflow-hidden font-mono  text-lg text-gray-500 hover:text-indigo-500 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-28 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
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
                >
                  <div className="my-4 ">&rarr;</div>
                  <IoNewspaperSharp className="transition-colors group-hover:text-green-500  dark:hover:text-green-600" />

                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 hover:text-green-600 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-28 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
                    Resume
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <IoLogoGithub className="transition-colors group-hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-600" />
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 hover:text-gray-600 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <IoLogoLinkedin className="transition-colors group-hover:text-blue-800 " />
                  <p className=" relative overflow-hidden font-mono text-lg text-gray-500 hover:text-blue-800 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
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
                >
                  <div className="my-4">&rarr;</div>
                  <IoLogoInstagram className="transition-colors group-hover:text-pink-500 " />
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 hover:text-pink-500 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-28 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
                    Instagram
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start ">
                <a
                  href={userData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <IoLogoFacebook className="transition-colors group-hover:text-indigo-700 " />
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 hover:text-blue-800 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
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

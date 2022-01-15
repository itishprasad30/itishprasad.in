import Image from "next/image";
import Section from "../components/section";
import NextLink from "next/link";
import userData from "../Constants/data";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoDiscord,
  IoLogoInstagram,
} from "react-icons/io5";

export default function Home() {
  return (
    <div className=" max-w-4xl ">
      <div className=" bg-gray-700 opacity-80 p-4 mb-4 items-center text-white rounded-lg">
        Hello , I am a Full Stack Developer from India.
      </div>

      <div className="md:flex justify-center items-center ">
        <div className="flex-1">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Itish Prasad
          </h1>

          <p className="text-gray-700 dark:text-gray-200 mb-4">
            FullStack Developer || Web Dev{" "}
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-16">
            Believing Web Dev is the Future.So building a faster web. Exporing
            about web development, serverless, and React / Next.js,Tailwind Css
            & Apis.
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
        <Section>
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white underline">
            Works
          </h2>
          <p className="text-justify indent-sm   break-words mt-3">
            {userData.about.description}
          </p>
          <div className="flex justify-center ">
            <NextLink href="/works" className="">
              <button className="my-4 text-white  bg-green-400 hover:bg-green-600 rounded-lg px-3 py-2 ">
                My PortFolio
                <i className="ml-2 ">&gt;</i>
              </button>
            </NextLink>
          </div>
        </Section>

        <Section delay={0.5}>
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mt-6 text-black dark:text-white underline  ">
            Bio
          </h2>
          <div className="mr-2 mt-3 mb-2 flex space-x-4">
            <p className="font-bold ">2000 </p>
            <p className="font-medium">Born In Odisha, India</p>
          </div>

          <div className="mr-2 flex mb-2 space-x-4">
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

          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mt-6 text-black dark:text-white underline  ">
            I 🤍{" "}
          </h2>
          <p className="indent-sm mt-3">
            Coding , Music ,Watching Movies, Exploring New Technologies ,Gaming
            .
          </p>
        </Section>

        <Section delay={0.3}>
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mt-6 text-black dark:text-white underline  ">
            Social Links{" "}
          </h2>
          <div className="mt-4 ml-4">
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-4 group"
              >
                <div className="my-4">&rarr;</div>
                <IoLogoTwitter />

                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                  Twitter
                </p>
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-4 group"
              >
                <div className="my-4">&rarr;</div>
                <IoLogoGithub />
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                  GitHub
                </p>
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-4 group"
              >
                <div className="my-4">&rarr;</div>
                <IoLogoLinkedin />
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                  LinkedIn
                </p>
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-4 group"
              >
                <div className="my-4">&rarr;</div>
                <IoLogoInstagram />
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                  Instagram
                </p>
              </a>
            </div>
            <div className="flex flex-row justify-start items-center ">
              <a
                href={userData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-4 group"
              >
                <div className="my-4">&rarr;</div>
                <IoLogoFacebook />
                <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                  Facebook
                </p>
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

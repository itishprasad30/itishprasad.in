import Link from "next/link";
import NowPlaying from "../NowPlaying";
import Tooltip from "../Tooltip";
import UnstyledLink from "../links/UnstyledLink";

// import { FeedbackFish } from "@feedback-fish/react";
import * as React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FiMail } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from "react-icons/si";
import { Tooltip as TooltipTippy } from "react-tippy";

// import NowPlaying from "components/NowPlaying";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="mx-auto mt-8 mb-8 flex w-full max-w-4xl flex-col items-start justify-center ">
      <hr className="border-1 mb-8 w-full border-gray-600 dark:border-gray-400" />
      <span className="mb-4 text-base font-semibold">
        Now Playing Showing From My Spotify
      </span>
      <NowPlaying />
      <hr className="border-1 mb-8 w-full border-gray-600 dark:border-gray-400" />

      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/home">
            <a className="text-gray-500 transition hover:text-gray-600">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 transition hover:text-gray-600">
              About
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 transition hover:text-gray-600">
              Projects
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 ">
          <ExternalLink href="https://itish-umami.herokuapp.com/share/l6tJGuIl/Itishprasad">
            Analytics
          </ExternalLink>
          <ExternalLink href="https://github.com/itishprasad30/itishprasad.in">
            Source Code
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCUgpCmLh5k4Sna9azJ269MA">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/statistics">
            <a className="text-gray-500 transition hover:text-gray-600">
              Statistics
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-500 transition hover:text-gray-600">
              Contact Me
            </a>
          </Link>

          <Link href="/tweets">
            <a className="text-gray-500 transition hover:text-gray-600">
              Tweets Posts
            </a>
          </Link>
        </div>
      </div>

      <div className="flex  w-full flex-col items-center  border-t pt-6 dark:border-gray-600">
        <p className="mt-12 font-medium text-gray-600 dark:text-gray-300">
          Reach me out
        </p>
        <SocialLinks />
        <p className=" flex flex-col text-sm text-gray-600 dark:text-gray-300 md:flex-row">
          ©Itish Prasad Sahoo {new Date().getFullYear()} •{"  "}
          <span className="focus-visible:ring-primary-300 rounded-sm hover:text-gray-800 focus:outline-none focus-visible:ring dark:hover:text-gray-100">
            Made with ❣️ by{" "}
            <span className="font-mono selection:bg-orange-400">Itish</span>
          </span>
        </p>
      </div>
    </footer>
  );
}

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState(
    "Click the mail logo to copy = "
  );

  return (
    <div className="mt-2 flex space-x-4">
      <div className="flex items-center justify-center">
        <TooltipTippy
          trigger="mouseenter"
          hideOnClick={false}
          interactive
          html={
            <div className="inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-black dark:text-gray-200">
              {copyStatus}
              <p className="inline-block font-medium">
                itishprasad30@gmail.com
              </p>
            </div>
          }
        >
          <CopyToClipboard
            text="itishpreasad30@gmai.com"
            onCopy={() => {
              setCopyStatus("Copied to clipboard 🥳");
              setTimeout(
                () => setCopyStatus("Click the mail logo to copy = "),
                1500
              );
            }}
          >
            <button className="focus-visible:ring-primary-300 rounded-sm align-middle focus:outline-none focus-visible:ring">
              <FiMail className="hover:text-primary-300 dark:hover:text-primary-300 h-7 w-7 align-middle text-gray-600 dark:text-gray-300" />
            </button>
          </CopyToClipboard>
        </TooltipTippy>
      </div>
      {socials.map((social) => (
        <Tooltip interactive={true} key={social.href} content={social.text}>
          <UnstyledLink
            className="inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-green-300"
            href={social.href}
            onClick={() => {
              `Footer Link: ${social.id}`, "link";
            }}
          >
            <social.icon className="my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-indigo-600" />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

const socials = [
  {
    href: "https://github.com/itishprasad30",
    icon: SiGithub,
    id: "Github",
    text: (
      <>
        See my projects on <p className="font-medium">Github</p>
      </>
    ),
  },
  {
    href: "https://bit.ly/itishprasad",
    icon: SiLinkedin,
    id: "Linkedin",
    text: (
      <>
        Find me on <p className="font-medium">Linkedin</p>
      </>
    ),
  },
  {
    href: "https://bit.ly/3HTGy0J",
    icon: SiTwitter,
    id: "Twitter",
    text: (
      <>
        I post updates, tips, insight, and sometimes do some talk. Follow me on{" "}
        <p className="font-medium">Twitter</p>!
      </>
    ),
  },
  {
    href: "https://bit.ly/3Ic5lO1",
    icon: SiInstagram,
    id: "Instagram",
    text: <>some social meadia link.</>,
  },
];

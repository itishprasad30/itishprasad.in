// import Logo from "./logo";
import NextLink from "next/link";
// import {
//   Container,
//   Box,
//   Link,
//   Stack,
//   Heading,
//   Flex,
//   Menu,
//   MenuItem,
//   MenuList,
//   MenuButton,
//   IconButton,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import ThemeToggleButton from "./theme-toggle-button";
// import { IoLogoGithub } from "react-icons/io5";
import cn from "classnames";
import Logo from "./logo";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  //   const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <a
        className={cn(
          active
            ? "bg-green-200 text-base font-bold text-gray-800 "
            : "font-normal text-gray-600 ",
          "hidden rounded-lg p-1 transition-all hover:bg-gray-200 sm:px-3 sm:py-2 md:inline-block"
        )}
        {...props}
        target={_target}
      >
        {children}
      </a>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  return (
    <div className=" dark sticky top-0 z-50 mx-auto  flex flex-row rounded-md bg-[#F0E7DB] opacity-90 hover:opacity-100  md:flex md:max-w-3xl md:justify-end  ">
      <div className="flex   max-w-md flex-grow flex-wrap items-center justify-evenly p-2">
        <div className="mr-5 items-center">
          <h2 className="text-lg font-semibold leading-tight" title="Home Page">
            <Logo />
          </h2>
        </div>
      </div>
      <div className="flex   max-w-md flex-grow flex-wrap items-center justify-evenly p-2">
        {/*  displaying the logo and name  */}
        {/* <div className="mr-5 items-center">
          <h2 className="font-semibold text-lg leading-tight">
            <Logo />
          </h2>
        </div> */}
        {/* nav items here */}

        <div className="flex flex-row space-x-4">
          <div className="flex space-x-1  md:w-auto md:flex-1 md:flex-row  ">
            <LinkItem href="/projects" path={path}>
              Projects
            </LinkItem>
            <LinkItem href="/tweets" path={path}>
              Posts
            </LinkItem>
            <LinkItem href="/blog" path={path}>
              Blog
            </LinkItem>
            <LinkItem href="/dashboard" path={path}>
              Dashboard
            </LinkItem>
            <LinkItem href="/about" path={path}>
              About
            </LinkItem>
          </div>
          <button
            title="Toggle Mode"
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-600"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5  text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
        <div className="md:hidden">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import NextLink from "next/link";
import cn from "classnames";
import Logo from "./logo";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { black, white } from "tailwindcss/colors";
// import MobileMenu from "./MobileMenu";

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  return (
    <NextLink href={href} passHref>
      <a
        className={cn(
          active
            ? "hidden rounded-lg bg-gradient-to-r  from-pink-500 to-yellow-500 p-1 text-sm font-normal text-gray-50 sm:px-3  sm:py-2 md:inline-block "
            : "un hidden   p-1 text-sm  font-normal  sm:px-3 sm:py-2 md:inline-block"
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
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  return (
    <div className="sticky top-0  z-50 mx-auto  mb-4  flex flex-row rounded-md bg-[#F0E7DB]  opacity-90 hover:opacity-100 dark:bg-[#202023]  md:flex md:max-w-4xl md:justify-end  ">
      <div className="flex flex-grow  items-center justify-evenly p-2">
        <div className="mx-auto items-center">
          <h2
            className="text-sm  font-semibold leading-tight md:flex md:text-lg"
            title="Home Page"
          >
            <Logo />
          </h2>
        </div>
      </div>
      <div className="flex  flex-grow flex-wrap items-center justify-evenly p-2">
        <div className="flex flex-row items-center space-x-4">
          <div className="flex  space-x-3 dark:text-white md:w-auto  md:flex-1 md:flex-row md:space-x-1  ">
            <LinkItem href="/projects" path={path}>
              Projects
            </LinkItem>

            <LinkItem href="/blog" path={path}>
              Blog
            </LinkItem>
            <LinkItem href="/library" path={path}>
              Library
            </LinkItem>
            <LinkItem href="/dashboard" path={path}>
              Dashboard
            </LinkItem>
            <LinkItem href="/about" path={path}>
              About
            </LinkItem>
          </div>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#202023]   dark:bg-[#F0E7DB]"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <div className="text-orange-600">
              {resolvedTheme === "light" ? (
                <FiMoon size={20} />
              ) : (
                <FiSun size={20} />
              )}
            </div>
          </button>
        </div>
        <div className="md:hidden">
          <Dropdown />
        </div>

        {/* <div className="md:hidden">
          <MobileMenu />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;

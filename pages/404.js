import React from "react";
import NextLink from "next/link";
import { RiAlarmWarningFill } from "react-icons/ri";
import Seo from "../components/layouts/Seo";

const NotFound = () => {
  return (
    <div className="flex min-h-[480px]  flex-col items-center justify-center gap-8">
      <Seo templateTitle="404 Not Found" />
      <RiAlarmWarningFill
        size={60}
        className="drop-shadow-glow animate-flicker text-red-500"
      />
      <div>
        <div className="mx-auto flex flex-col justify-center text-center ">
          <h1 className="  text-4xl font-semibold">Page Not Found</h1>

          <p className="text-lg font-normal">
            The page you &apos;re looking for was found.
          </p>
        </div>
      </div>
      <NextLink href="/">
        <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
          Back to Home
        </button>
      </NextLink>
    </div>
  );
};

export default NotFound;

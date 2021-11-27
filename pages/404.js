import React from "react";
import NextLink from "next/link";
const NotFound = () => {
  return (
    <div className="flex  flex-col space-y-6 justify-center items-center">
      <div className="justify-center items-center ml-10">
        <h1 className="text-4xl justify-center font-semibold mt-4 mb-3">
          Not Found
        </h1>

        <p className="font-normal text-lg">
          The page you &apos;re looking for was found.
        </p>
      </div>

      <div>
        <NextLink href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Return to Home
          </button>
        </NextLink>
      </div>
    </div>
  );
};

export default NotFound;

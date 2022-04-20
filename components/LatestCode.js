import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "../lib/getLatestRepos";
import userData from "../Constants/data";
import ButtonLink from "./links/ButtonLink";
import clsx from "clsx";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    let latestRepos = await getLatestRepos(userData);
    // console.log("latestRepos", latestRepos);
    setRepos(repositories);
  }, []);
  return (
    <div>
      <div>
        <div className="mb-6 flex flex-col items-center justify-between md:flex-row ">
          <h1 className="py-20  text-4xl font-bold md:text-left  md:text-4xl">
            Latest Code
          </h1>

          <div className="group relative">
            <div
              className={clsx(
                "animate-tilt absolute -inset-0.5  rounded blur",
                "bg-gradient-to-r from-yellow-300 to-green-500",
                "dark:from-yellow-400 dark:via-pink-300",
                "opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
              )}
            />
            <ButtonLink
              className="relative  bg-[#F0E7DB] dark:bg-[#202023] dark:text-white"
              href={`https://github.com/${userData.githubUsername}/?tab=repositories`}
            >
              View In Github
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 gap-y-20 px-10 md:grid-cols-2 lg:-mt-10 lg:grid-cols-3">
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key={idx} />
          ))}
      </div>
    </div>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo">
      <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
        {latestRepo.name}
      </h1>
      <p className="my-4 text-base font-normal text-gray-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="group flex w-full flex-row items-center space-x-2 font-semibold"
      >
        <p>View Repository </p>
        <div className="transform  transition duration-300 group-hover:translate-x-2">
          &rarr;
        </div>
      </a>
    </div>
  );
};

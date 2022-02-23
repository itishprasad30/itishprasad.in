import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "../lib/getLatestRepos";
import userData from "../Constants/data";

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
        <div className="flex flex-col items-center justify-between md:flex-row ">
          <h1 className="py-20  text-4xl font-bold md:text-left  md:text-4xl">
            Latest Code
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className="mb-20 flex flex-row items-center space-x-4 rounded-lg bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg hover:bg-gray-200 dark:text-gray-700 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View GitHub</p>
          </a>
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

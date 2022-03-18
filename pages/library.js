import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Accent from "../components/fonts/Accent";
import LibraryCard from "../components/LibraryCard";
import ViewCounter from "../components/ViewCounter";
import useLoaded from "../hooks/useLoaded";
import { sortByTitle } from "../lib/mdx-client";
import { getAllFilesFrontmatter } from "../lib/mdx";
import Seo from "../components/layouts/Seo";

export default function LibraryPage({ snippets }) {
  const isLoaded = useLoaded();
  const [searchValue, setSearchValue] = useState("");
  // console.log(isLoaded);
  const filteredValue = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchValue.toLowerCase())
  );
  // console.log(snippets);
  return (
    <div>
      <Seo templateTitle="Library" description="all snippets of my Code" />
      <main>
        <section className={clsx(isLoaded && "fade-in-start")}>
          <div className="layout py-12">
            <h1 className="text-3xl font-bold md:text-5xl  " data-fade="1">
              <h1 className="text-3xl font-bold md:text-5xl"> Library</h1>
              <p className="hidden">
                {" "}
                <ViewCounter slug="library" />
              </p>
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300 " data-fade="2">
              Some collection of code snippets that I put for easy access, feel
              free to reuse!
            </p>
            <div className="relative mb-4 w-full" data-fade="3">
              <input
                type="text"
                aria-label="Search library"
                placeholder="Search library"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="block w-full  rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-[#323235] dark:text-gray-100 "
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl  font-semibold tracking-tight">
              All Code is Here
            </h2>
            <div
              data-fade="5"
              className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-2"
            >
              {/* snippets goes here */}
              {!filteredValue.length && (
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  No Result found.
                </p>
              )}
              {filteredValue.map((snippet) => (
                <LibraryCard key={snippet.slug} snippet={snippet} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const files = await getAllFilesFrontmatter("library");
  const snippets = sortByTitle(files);
  return {
    props: { snippets },
  };
}

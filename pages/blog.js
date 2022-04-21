import React, { useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import readingTime from "reading-time";
import useLoaded from "../hooks/useLoaded";
import clsx from "clsx";
import ViewCounter from "../components/ViewCounter";
import Seo from "../components/layouts/Seo";

const blog = ({ posts }) => {
  //   eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchValue, setSearchValue] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isLoaded = useLoaded();

  const filteredBlogPosts = posts.filter(
    (post) =>
      post.frontMatter.title
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      post.frontMatter.description
        .toLowerCase()
        .includes(searchValue.toLowerCase())
  );

  return (
    <div className="mx-auto mb-16 flex max-w-3xl flex-col items-start justify-center">
      <Seo
        templateTitle="Blog"
        description="some blog post about web development"
      />
      <section className={clsx(isLoaded && "fade-in-start")}>
        <h1
          data-fade="0"
          className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl"
        >
          Blog
        </h1>
        <span className="hidden">
          <ViewCounter slug="blog" />
        </span>

        <p data-fade="1" className="mb-4 text-gray-600 dark:text-gray-400">
          {`I have been writing Blog about Thoughts, mental models, and tutorials about front-end development.
         Use the search box below to filter by title.`}
        </p>
        {/* Seaching the file by its Name containing its name */}
        <div data-fade="2" className="relative mb-4 w-full">
          <input
            type="text"
            aria-label="Search articles"
            placeholder="Search articles"
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
        <h3
          data-fade="3"
          className="mt-8  mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-4xl"
        >
          All Posts
        </h3>

        <div
          data-fade="4"
          className=" flex flex-col  justify-center gap-8 md:grid md:grid-cols-2  "
        >
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {filteredBlogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <a>
                <BlogCard post={post} />
              </a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default blog;

export async function getStaticProps() {
  // Read all the Posts dir
  let files = fs.readdirSync(path.join("data/blog"));

  // Get only mdx files from the files

  files = files.filter((file) => file.split(".")[1] === "mdx");

  const posts = await Promise.all(
    files.map((file) => {
      const mdWithData = fs.readFileSync(path.join("data/blog", file), "utf-8");

      let { data: frontMatter } = matter(mdWithData);

      return {
        frontMatter: {
          readingTime: readingTime(mdWithData),
          ...frontMatter,
        },
        slug: file.split(".")[0],
      };
    })
  );

  return {
    props: {
      posts,
    },
  };
}

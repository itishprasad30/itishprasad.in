import React from "react";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { format } from "date-fns";
import readingTime from "reading-time";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import MDXComponents from "../../components/content/MdxComponents";

const Blogpost = ({ frontMatter, slug, mdxSource }) => {
  const components = MDXComponents;
  return (
    <div>
      <div>
        <div className="pb-4   dark:border-gray-500">
          <img
            src={frontMatter.image}
            alt="image"
            height={(1200 * 2) / 5}
            width={1200}
          />

          <h1 className="mt-4  text-2xl font-bold md:text-3xl ">
            {frontMatter.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Written on{" "}
            {format(new Date(frontMatter.publishedAt), "MMMM dd yyyy")} by Itish
            Prasad Sahoo.
          </p>
          <div className="mt-6 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="inline-block text-base" />
              <span>{frontMatter.readingTime.text}</span>
            </div>

            <div className="flex items-center gap-1">
              <HiOutlineEye className="inline-block text-base" />
              <span>{"–––"} views</span>
            </div>
          </div>
          <hr className="mt-2 border-gray-700 dark:border-gray-600" />
          <section>
            <article className="prose dark:prose-invert  mx-auto mt-4 w-full min-w-full transition-colors">
              <MDXRemote {...mdxSource} components={components} />
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;

export async function getStaticPaths() {
  // Read the files inside the data/blog dir
  const files = fs.readdirSync(path.join("data/blog"));

  // Generate path for each file
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // read each file
  const markdown = fs.readFileSync(
    path.join("data/blog", slug + ".mdx"),
    "utf-8"
  );

  // Extract front matter
  const { data: frontMatter, content } = matter(markdown);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: {
        readingTime: readingTime(markdown),
        ...frontMatter,
      },
      slug,
      mdxSource,
    },
  };
}

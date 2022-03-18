import * as React from "react";
// import fs from "fs";
// import path from "path";
import { MDXRemote } from "next-mdx-remote";
// import matter from "gray-matter";
// import { serialize } from "next-mdx-remote/serialize";
import { format } from "date-fns";
// import readingTime from "reading-time";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
// import MDXComponents from "../../components/content/MdxComponents";
import CloudinaryImg from "../../components/images/CloudinaryImg";
import CustomLink from "../../components/links/CustomLink";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponents from "../../components/content/MdxComponents";
import ViewCounter from "../../components/ViewCounter";
import Accent from "../../components/fonts/Accent";
import Seo from "../../components/layouts/Seo";

const Blogpost = ({ code, frontMatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div>
      <Seo
        templateTitle={frontMatter.title}
        description={frontMatter.description}
      />
      <div>
        <div className="pb-4   dark:border-gray-500">
          <CloudinaryImg
            publicId={frontMatter.image}
            alt="image"
            height={(1200 * 2) / 5}
            width={1200}
            aspect={{ height: 2, width: 5 }}
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
              <Accent>{frontMatter.readingTime.text}</Accent>
            </div>

            <div className="flex items-center gap-1">
              <HiOutlineEye className="inline-block text-base" />
              <Accent>
                <ViewCounter slug={frontMatter.slug} />
              </Accent>
            </div>
          </div>
          <hr className="mt-2 border-gray-700 dark:border-gray-600" />
          <section>
            <article className="prose dark:prose-invert  mx-auto mt-4 w-full min-w-full transition-colors">
              <Component
                components={{
                  ...MDXComponents,
                }}
              />
            </article>
          </section>
          <div className="mt-8 flex max-w-[150px] transform transition-all duration-300 hover:text-xl hover:text-green-800">
            <CustomLink href="/blog"> ← Back to Blog</CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;

export const getStaticPaths = async () => {
  const posts = await getFiles("blog");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getFileBySlug("blog", params?.slug);
  return {
    props: {
      frontMatter: post.frontmatter,
      code: post.code,
    },
  };
};

// export async function getStaticPaths() {
//   // Read the files inside the data/blog dir
//   const files = fs.readdirSync(path.join("data/blog"));

//   // Generate path for each file
//   const paths = files.map((file) => {
//     return {
//       params: {
//         slug: file.replace(".mdx", ""),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   // read each file
//   const markdown = fs.readFileSync(
//     path.join("data/blog", slug + ".mdx"),
//     "utf-8"
//   );

//   // Extract front matter
//   const { data: frontMatter, content } = matter(markdown);

//   const mdxSource = await serialize(content);

//   return {
//     props: {
//       frontMatter: {
//         readingTime: readingTime(markdown),
//         ...frontMatter,
//       },
//       slug,
//       mdxSource,
//     },
//   };
// }

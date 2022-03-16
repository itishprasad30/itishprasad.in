import TechIcons from "../../components/TechIcons";
import { HiOutlineEye } from "react-icons/hi";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponents from "../../components/content/MdxComponents";
import CustomLink from "../../components/links/CustomLink";

export default function SingleLibraryPage({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div>
      <main>
        <section className="">
          <div className="layout">
            <div className="border-b-2 pb-4 dark:border-gray-600">
              <h1 className="mt-4 text-2xl font-bold md:text-4xl">
                {frontmatter.title}
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {frontmatter.description}
              </p>
              <div className="mt-2 flex items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <HiOutlineEye className="inline-block text-base" />
                  <p>{"---"}</p>
                </div>

                <span>•</span>

                <TechIcons techs={frontmatter.tags.split(",")} />
              </div>
            </div>
            <hr className="dark:border-gray-600" />

            <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
              <article className="prose dark:prose-invert mx-auto mt-4 w-full transition-colors">
                {/* mdx compoonets */}
                <Component
                  components={{
                    ...MDXComponents,
                  }}
                />
              </article>
            </section>
          </div>
          <div>
            <CustomLink href="/library"> ← Back to Library</CustomLink>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const posts = await getFiles("library");

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
  const post = await getFileBySlug("library", params?.slug);
  return {
    props: {
      frontmatter: post.frontmatter,
      code: post.code,
    },
  };
};

import TechIcons from "../../components/TechIcons";
import { HiOutlineEye } from "react-icons/hi";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponents from "../../components/content/MdxComponents";
import CustomLink from "../../components/links/CustomLink";
import ViewCounter from "../../components/ViewCounter";
import Accent from "../../components/fonts/Accent";
import Seo from "../../components/layouts/Seo";
import ScrollToTop from "../../components/ScrollToTop";
import ArrowLink from "../../components/links/ArrowLink";
import useScrollSpy from "../../hooks/useScrollspy";
import TableOfContents from "../../components/content/TableOfContents";
// import TableOfContents from "../../components/content/TableOfContents";
// import useScrollSpy from "../../hooks/useScrollspy";

export default function SingleLibraryPage({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  // //#region  //*=========== Scrollspy ===========
  // const activeSection = useScrollSpy();

  // const [toc, setToc] = React.useState();
  // const minLevel =
  //   toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  // React.useEffect(() => {
  //   const headings = document.querySelectorAll(".mdx h1, .mdx h2, .mdx h3");

  //   const headingArr = [];
  //   headings.forEach((heading) => {
  //     const id = heading.id;
  //     const level = +heading.tagName.replace("H", "");
  //     const text = heading.textContent + "";

  //     headingArr.push({ id, level, text });
  //   });

  //   setToc(headingArr);
  // }, [frontmatter.slug]);
  // //#endregion  //*======== Scrollspy ===========

  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState();

  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3");
    const headingArr = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace("H", "");
      const text = heading.textContent + "";

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);

  return (
    <div className="selection:bg-red-400 dark:selection:bg-yellow-800">
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
      />

      <main>
        <ArrowLink href="/library" direction="left">
          Back to Library
        </ArrowLink>
        <ScrollToTop smooth />
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
                  <Accent>
                    <ViewCounter slug={frontmatter.slug} />
                  </Accent>
                </div>

                <span>•</span>

                <TechIcons techs={frontmatter.tags.split(",")} />
              </div>
            </div>
            <hr className="dark:border-gray-600" />

            <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
              <article className="prose mx-auto mt-4 w-full transition-colors dark:prose-invert">
                {/* mdx compoonets */}
                <Component
                  components={{
                    ...MDXComponents,
                  }}
                />
              </article>
              <aside className="py-4">
                <div className="sticky top-36">
                  <TableOfContents
                    toc={toc}
                    minLevel={minLevel}
                    activeSection={activeSection}
                  />
                </div>
              </aside>
            </section>
          </div>
          <div className="mt-6">
            <ArrowLink href="/library" direction="left">
              Back to Library
            </ArrowLink>
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

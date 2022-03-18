import React from "react";
import ViewCounter from "../components/ViewCounter";
import { getAllFilesFrontmatter } from "../lib/mdx";
import userData from "../Constants/data";
import Seo from "../components/layouts/Seo";

const statistics = ({ files, library }) => {
  return (
    <div>
      <Seo
        templateTitle="Statistics "
        description="some firebase pulling data from server"
      />
      <main>
        <section>
          <div className="layout py-12">
            <h1 className="text-2xl font-bold md:text-3xl">Statistics</h1>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2 rounded-md border border-gray-300 bg-gray-50 p-6 text-center shadow-sm dark:border-gray-600 dark:bg-gray-600">
                <h3 className="text-xl font-bold">Blog</h3>
                <div className="space-y-1">
                  <p className="text-gray-800 dark:text-gray-200">
                    {files.length} Posts
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <ViewCounter slug="blog" />
                  </p>
                  {/* <p className="text-gray-800 dark:text-gray-200">24 Likes</p> */}
                </div>
              </div>
              <div className="space-y-2 rounded-md border border-gray-300 bg-gray-50 p-6 text-center shadow-sm dark:border-gray-600 dark:bg-gray-600">
                <h3 className="text-xl font-bold">Projects</h3>
                <div className="space-y-1">
                  <p className="text-gray-800 dark:text-gray-200">
                    {userData.projects.length} Posts
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <ViewCounter slug="projects" />
                  </p>
                  {/* <p className="text-gray-800 dark:text-gray-200">4243 Likes</p> */}
                </div>
              </div>
              <div className="space-y-2 rounded-md border border-gray-300 bg-gray-50 p-6 text-center shadow-sm dark:border-gray-600 dark:bg-gray-600">
                <h3 className="text-xl font-bold">Library</h3>
                <div className="space-y-1">
                  <p className="text-gray-800 dark:text-gray-200">
                    {library.length} Posts
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <ViewCounter slug="library" />
                  </p>
                  {/* <p className="text-gray-800 dark:text-gray-200">23 Likes</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default statistics;

export async function getStaticProps() {
  const files = await getAllFilesFrontmatter("blog");
  const library = await getAllFilesFrontmatter("library");
  return {
    props: {
      files,
      library,
    },
  };
}

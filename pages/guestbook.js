import React from "react";
import Comment from "../components/content/Comment";
import Seo from "../components/layouts/Seo";

const GuestBookPage = () => {
  return (
    <div>
      <Seo templateTitle="GuestBook" description="Feel free to comment here" />
      <main>
        <section>
          <div className="layout py-20">
            <h1 className="text-3xl font-bold">GuestBook</h1>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Leave whatever you like to say—message, appreciation, suggestions.
              If you got some questions, you can leave them on the{" "}
              <a
                href="http://github.com/itishprasad30"
                target="_blank"
                rel="noopener noreferrer"
              >
                AMA
              </a>
            </p>
            <figure className="mt-12">
              <Comment />
            </figure>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GuestBookPage;

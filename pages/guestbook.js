import React from "react";
import Comment from "../components/Comment";
import Seo from "../components/layouts/Seo";
import { trackEvent } from "../lib/analytics";

const guestbook = () => {
  return (
    <div>
      <Seo
        templateTitle="Guestbook"
        description="Leave whatever you like to say—message, appreciation, suggestions."
      />

      <main>
        <section className="">
          <div className="layout py-20">
            <h1 className="mb-4  text-center text-3xl font-bold md:text-left md:text-4xl ">
              Guestbook
            </h1>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Leave whatever you like to say—message, appreciation, suggestions.
              If you got some questions, you can leave them on the{" "}
              <a
                className="text-orange-400 underline"
                href="https://github.com/itishprasad30/itishprasad.in/discussions/3"
              >
                AMA discussion
              </a>{" "}
              <a
                onClick={() => trackEvent("GuestBook Site:guestbook ", "link")}
                href="https://guestbook-comment.vercel.app/"
                className="font-mono text-base  "
              >
                GuestBook Custom App
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

export default guestbook;
{
  /* <div className="layout flex flex-col items-center justify-center">
      
      <Comment />
    </div> */
}

// <div className="layout  flex flex-col items-center justify-center">
//   <h1 className="text-3xl font-bold">This page is being building ...</h1>
//   <p>Thank you for your patience</p>

//   <a
//     onClick={() => trackEvent("GuestBook Site:guestbook ", "link")}
//     href="https://guestbook-comment.vercel.app/"
//     className="font-serif text-xl "
//   >
//     GuestBook App
//   </a>
//   <div className="w-64 ">
//     <Comment />
//   </div>
// </div>
// );

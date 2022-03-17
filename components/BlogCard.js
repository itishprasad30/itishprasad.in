import clsx from "clsx";
import { format } from "date-fns";
import * as React from "react";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import useSWR from "swr";
import CloudinaryImg from "../components/images/CloudinaryImg";
import Accent from "./fonts/Accent";

async function fetcher(...args) {
  const res = await fetch(...args);

  return res.json();
}

const BlogCard = ({ post }) => {
  const { data } = useSWR(`/api/views/${post.slug}`, fetcher);
  const views = data?.total;
  return (
    <div
      className={clsx(
        " h-[370px] w-full rounded-md border border-gray-300   dark:border-gray-600",
        "scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu",
        "transition duration-100",
        "motion-reduce:hover:scale-100",
        "animate-shadow"
      )}
    >
      <div className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-gray-500">
        <div className="relative">
          <CloudinaryImg
            noStyle
            className="pointer-events-none overflow-hidden rounded-t-md"
            publicId={post.frontMatter.image}
            alt="Photo taken from unsplash"
            width={1200}
            height={(1200 * 2) / 5}
            aspect={{ height: 2, width: 5 }}
            preview={false}
          />
        </div>
        <div className="p-4">
          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 md:text-2xl">
            {post.frontMatter.title}
          </h4>
          <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="inline-block text-base" />
              <Accent>{post.frontMatter.readingTime.text}</Accent>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineEye className="inline-block text-base" />
              <Accent>
                {views ? new Number(views).toLocaleString() : "–––"} views
              </Accent>
            </div>
          </div>
          <p className="mt-4 mb-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="font-bold text-gray-800 dark:text-gray-100">
              {format(new Date(post.frontMatter.publishedAt), "MMMM dd,yyyy")}
            </span>
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {post.frontMatter.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

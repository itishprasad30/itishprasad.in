import { format } from "date-fns";
import React from "react";
import { HiOutlineClock } from "react-icons/hi";

const BlogCard = ({ post }) => {
  return (
    <div className="mx-auto w-72 max-w-2xl cursor-pointer  rounded-md border transition-all duration-300 hover:scale-105 hover:text-green-700 hover:shadow-lg">
      <img
        className="aspect-video"
        src={post.frontMatter.image}
        alt="Cover Image"
      />
      <div className="mt-2 p-2">
        <h2 className="text-xl font-semibold">{post.frontMatter.title}</h2>
        <div className="flex items-center gap-1">
          <HiOutlineClock className="inline-block text-base" />
          <span>{post.frontMatter.readingTime.text}</span>
        </div>
        <p className="mt-4 mb-2 text-sm text-gray-600 dark:text-gray-100">
          <span className="font-bold text-gray-800 dark:text-gray-100">
            {format(new Date(post.frontMatter.publishedAt), "MMMM dd,yyyy")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

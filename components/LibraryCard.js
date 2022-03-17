import clsx from "clsx";
import * as React from "react";
import { GiTechnoHeart } from "react-icons/gi";

import Link from "next/link";
// import UnstyledLink from "@/components/links/UnstyledLink";
import Accent from "./fonts/Accent";
import TechIcons from "./TechIcons";
import useSWR from "swr";
// import TechIcons, { TechListType } from '@/components/TechIcons';

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

export default function LibraryCard({ className, snippet }) {
  const { data } = useSWR(`/api/views/${snippet.slug}`, fetcher);
  const views = data?.total;
  return (
    <div
      className={clsx(
        "ring-vis-0  h-full cursor-pointer rounded-md border-2 border-gray-400 dark:border-gray-600",
        "scale-100 hover:scale-[1.04] active:scale-[0.97] motion-safe:transform-gpu",
        "transition duration-100",
        "motion-reduce:hover:scale-100",
        "animate-shadow",
        className
      )}
    >
      <Link
        passHref
        href={`/library/${snippet.slug}`}
        className="focus-visible:ring-primary-300 block h-full  rounded-md focus:outline-none focus-visible:ring"
      >
        <div className="p-4">
          <h4 className="text-base font-bold text-gray-800 dark:text-gray-100 md:text-lg">
            {snippet.title}
          </h4>

          <div className="mt-1 flex items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <GiTechnoHeart className="inline-block text-base" />
              <Accent>
                {views ? new Number(views).toLocaleString() : "–––"} views
              </Accent>
            </div>
            <span>•</span>
            <TechIcons techs={snippet.tags.split(",")} />
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            {snippet.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

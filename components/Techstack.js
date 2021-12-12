import clsx from "clsx";
import * as React from "react";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tooltip from "./Tooltip";

export default function TechStack() {
  return (
    <div className="flex space-x-2 md:space-x-4">
      {stacks.map((tech) => (
        <Tooltip key={tech.id} content={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              "w-8 h-8 md:w-10 md:h-10",
              "text-gray-600 dark:hover:text-gray-400 dark:text-gray-200 hover:text-gray-800",
              "transition-colors"
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: "nextjs",
    icon: SiNextdotjs,
    tooltip: (
      <>
        <a href="https://nextjs.org">Next.js</a>, currently my go-to framework
        because of the static generation, dynamic paths, and built-in api.
      </>
    ),
  },
  {
    id: "react",
    icon: SiReact,
    tooltip: (
      <>
        <a href="https://reactjs.org/">Create React App</a>, first frontend
        framework that I learned, great if you are making an authenticated
        website.
      </>
    ),
  },
  {
    id: "typescript",
    icon: SiTypescript,
    tooltip: (
      <>
        <a href="https://www.typescriptlang.org/">TypeScript</a>, finally
        jumping on this one, I love the experience! Check out my{" "}
        <a href="https://github.com/theodorusclarence/ts-nextjs-tailwind-starter">
          starter template
        </a>{" "}
        using Next.js, Tailwind CSS, and TypeScript
      </>
    ),
  },
  {
    id: "tailwind",
    icon: SiTailwindcss,
    tooltip: (
      <>
        <a href="https://tailwindcss.com/">Tailwind CSS</a> is awesome, I have
        never achieved this much reusability. Make sure you get the{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
          extension
        </a>
        .
      </>
    ),
  },
  {
    id: "vercel",
    icon: IoLogoVercel,
    tooltip: (
      <>
        <a href="https://swr.vercel.app/">SWR by Vercel</a>, great react hooks
        for data fetching and caching, the{" "}
        <a href="https://swr.vercel.app/docs/revalidation#revalidate-on-focus">
          revalidate on focus
        </a>{" "}
        is unreal. react-query is also a great alternative to this.
      </>
    ),
  },
  {
    id: "node",
    icon: SiNodedotjs,
    tooltip: (
      <>
        <a href="https://nodejs.org/">Node.js</a>, simple backend language so
        you do not need to learn another language. Not using this too often
        because Next.js already has a backend built-in.
      </>
    ),
  },
];

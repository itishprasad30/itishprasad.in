import useSWR from "swr";
import format from "comma-number";

import MetricCard from "./Card";
import ButtonLink from "../links/ButtonLink";
import clsx from "clsx";
import { trackEvent } from "../../lib/analytics";

export default function GitHub() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/github", fetcher);

  const repoCount = format(data?.repoCount);

  const link = "https://github.com/itishprasad30/?tab=repositories";

  return (
    <div className="group relative">
      <div
        className={clsx(
          "animate-tilt absolute -inset-0.5 mt-6 rounded blur",
          "bg-gradient-to-r from-yellow-300 to-green-500",
          "dark:from-yellow-400 dark:via-pink-300",
          "opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
        )}
      />
      <ButtonLink
        className="relative mt-6 flex w-full flex-col bg-[#F0E7DB] dark:bg-[#202023] dark:text-white"
        href={link}
        variant="light"
        onClick={() => trackEvent(`DashBoardLink: Github Repos `, "Button")}
      >
        Github Repositories 🧵{" "}
        <p
          className=" text-xl font-bold
        "
        >
          {repoCount || "-"}
        </p>
      </ButtonLink>
    </div>
  );
}

{
  /* <MetricCard
      header="GitHub Repos"
      link={link}
      metric={repoCount}
      gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
    /> */
}

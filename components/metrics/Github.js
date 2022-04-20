import useSWR from "swr";
import format from "comma-number";

import MetricCard from "./Card";
import ButtonLink from "../links/ButtonLink";
import clsx from "clsx";
import { trackEvent } from "../../lib/analytics";

export default function GitHub() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/github", fetcher);

  const stars = format(data?.stars);

  const link = "https://github.com/itishprasad30?tab=stars";

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
        onClick={() => trackEvent(`DashBoardLink: Github Stars `, "Button")}
      >
        Github Stars ⭐
        <p
          className=" text-xl font-bold
        "
        >
          {stars || "-"}
        </p>
      </ButtonLink>
    </div>
  );
}

// <MetricCard
//   header="GitHub Stars"
//   link={link}
//   metric={stars}
//   gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
// />

import useSWR from "swr";
import format from "comma-number";

import MetricCard from "./Card";

export default function GitHub() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/github", fetcher);

  const repoCount = format(data?.repoCount);

  const link = "https://github.com/itishprasad30";

  return (
    <MetricCard
      header="GitHub Repos"
      link={link}
      metric={repoCount}
      gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
    />
  );
}

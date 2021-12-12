import useSWR from "swr";
import format from "comma-number";

import MetricCard from "./Card";

export default function GitHub() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/github", fetcher);

  const stars = format(data?.stars);

  const link = "https://github.com/itishprasad30";

  return (
    <MetricCard
      header="GitHub Stars"
      link={link}
      metric={stars}
      gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
    />
  );
}

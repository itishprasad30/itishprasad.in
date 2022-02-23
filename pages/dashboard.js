import GitHub from "../components/metrics/Github";
import TopTracks from "../components/TopTracks";
import Repo from "../components/metrics/Repo";
import Section from "../components/section";
import userData from "../Constants/data";
import LatestCode from "../components/LatestCode";
import getLatestRepos from "../lib/getLatestRepos";

const dashboard = ({ repositories }) => {
  return (
    <div>
      <Section>
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center ">
          <h1 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">
            Dashboard
          </h1>

          <div className="mb-8">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              This is my personal dashboard, built with Next.js API routes
              deployed as serverless functions. I use this dashboard to track
              various metrics across platforms like Spotify and Github. Want to
              build your own? Check out my&nbsp;
            </p>
          </div>
          <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <GitHub />
            <Repo />
          </div>

          <div className="mt-10">
            <LatestCode repositories={repositories} />
          </div>
          <h2 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black dark:text-white">
            Top Tracks
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Curious what I am currently jamming to? Here is my top tracks on
            Spotify updated daily.
          </p>

          <TopTracks />
        </div>
      </Section>
    </div>
  );
};

export default dashboard;

export const getServerSideProps = async () => {
  const repositories = await getLatestRepos(userData);

  return {
    props: {
      repositories,
    },
  };
};

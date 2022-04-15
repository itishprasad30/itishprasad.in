import GitHub from "../components/metrics/Github";
import TopTracks from "../components/TopTracks";
import Repo from "../components/metrics/Repo";
import userData from "../Constants/data";
import LatestCode from "../components/LatestCode";
import getLatestRepos from "../lib/getLatestRepos";
import useLoaded from "../hooks/useLoaded";
import clsx from "clsx";
import ViewCounter from "../components/ViewCounter";
import Seo from "../components/layouts/Seo";

const dashboard = ({ repositories }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isLoaded = useLoaded();
  return (
    <div>
      <Seo templateTitle="Dashboard " description=" github and spotify data" />
      <section className={clsx(isLoaded && "fade-in-start")}>
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center ">
          <h1
            data-fade="1"
            className="mb-5 text-3xl font-bold tracking-tight md:text-4xl"
          >
            Dashboard
          </h1>
          <div className="hidden">
            <ViewCounter slug="dashboard" />
          </div>

          <div data-fade="2" className="mb-8">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              This is my personal dashboard, built with Next.js API routes
              deployed as serverless functions. I use this dashboard to track
              various metrics across platforms like Spotify and Github. Want to
              build your own? Check out my&nbsp;
            </p>
          </div>
          <div
            data-fade="3"
            className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <GitHub />
            <Repo />
          </div>

          <div className="mt-10" data-fade="4">
            <LatestCode repositories={repositories} />
          </div>
          <h2
            data-fade="5"
            className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black dark:text-white"
          >
            Top Tracks
          </h2>
          <p data-fade="6" className="mb-4 text-gray-600 dark:text-gray-400">
            Curious what I am currently jamming to? Here is my top tracks on
            Spotify updated daily.
          </p>

          <TopTracks />
          <div data-fade="7" className="relative w-full   rounded-xl  p-3">
            <h3 className="text-2xl font-semibold ">Favorite music Video </h3>
            <iframe
              className="aspect-video h-96 w-full  rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative w-full rounded-lg shadow-lg  ">
            <h3 className="mb-5 text-2xl font-semibold ">
              Here is my spotify playlist you can play it
            </h3>
            <iframe
              className="rounded-md"
              src="https://open.spotify.com/embed/playlist/5ngwFNGPxgqKnL4j72tFPl?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </section>
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

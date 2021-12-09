import TopTracks from "../components/TopTracks";

const dashboard = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 ">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
          Dashboard
        </h1>

        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. I use this dashboard to track
            various metrics across platforms like Spotify and Github. Want to
            build your own? Check out my&nbsp;
          </p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I am currently jamming to? Here is my top tracks on
          Spotify updated daily.
        </p>
        <TopTracks />
      </div>
    </div>
  );
};

export default dashboard;

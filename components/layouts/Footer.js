import Link from "next/link";
import NowPlaying from "../NowPlaying";

// import NowPlaying from "components/NowPlaying";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-800 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full mt-8 mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <span className="font-semibold text-base mb-4">
        Now Playing Showing From My Spotify
      </span>
      <NowPlaying />
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-4xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/works">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Works
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/itish_prasad">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/itishprasad30">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCteuq-OGmgRDo6HJk0bPBsg">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/comments">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Comments
            </a>
          </Link>

          <Link href="/tweets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

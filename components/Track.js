export default function Track(track) {
  return (
    <div className="mt-8 flex w-full max-w-3xl cursor-pointer flex-row items-baseline rounded-md border-b border-gray-200 p-2 hover:bg-gray-300 dark:border-gray-800 dark:hover:bg-gray-800">
      <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
        {track.ranking}
      </p>
      <div className="flex flex-col pl-4">
        <a
          className="w-60 truncate font-medium text-gray-900 dark:text-gray-100 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p className="mb-4 w-60 truncate text-gray-400 sm:w-96 md:w-full">
          {track.artist}
        </p>
      </div>
    </div>
  );
}

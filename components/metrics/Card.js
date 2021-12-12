import cn from "classnames";

export default function MetricCard({ header, link, metric, gradient }) {
  return (
    <div
      className={cn(
        "transform cursor-pointer transition-all",
        "rounded-xl w-full md:w-full bg-gradient-to-r p-1",
        gradient
      )}
    >
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center text-gray-900 dark:text-gray-100">
          {header}
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
      <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">
        {metric || "-"}
      </p>
    </div>
  );
}

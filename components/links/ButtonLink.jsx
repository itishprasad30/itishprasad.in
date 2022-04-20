import clsx from "clsx";

import UnstyledLink from "./UnstyledLink";

export default function ButtonLink({
  children,
  className = "",
  variant = "default",
  ...rest
}) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        "inline-flex rounded px-4 py-2 font-bold",
        "border border-gray-300 shadow-sm dark:border-gray-600",
        "focus-visible:ring-primary-300 focus:outline-none focus-visible:ring",
        "scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu",
        "motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90",
        "transition duration-100",
        "animate-shadow",
        {
          "dark:bg-dark bg-white text-gray-800 disabled:bg-gray-200 dark:text-gray-100 dark:disabled:bg-gray-700":
            variant === "default",
        },
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}

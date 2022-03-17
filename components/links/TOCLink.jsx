import clsx from "clsx";
import * as React from "react";
import UnstyledLink from "./UnstyledLink";

export default function TOCLink({ id, level, minLevel, text, activeSection }) {
  return (
    <UnstyledLink
      href={`#${id}`}
      id={`link-${id}`}
      className={clsx(
        "font-medium hover:text-gray-700 focus:outline-none dark:hover:text-gray-200",
        "focus-visible:text-gray-700 dark:focus-visible:text-gray-200",
        activeSection === id
          ? "text-gray-900 dark:text-gray-100"
          : "text-gray-400 dark:text-gray-500"
      )}
      style={{ marginLeft: (level - minLevel) * 16 }}
    >
      {text}
    </UnstyledLink>
  );
}

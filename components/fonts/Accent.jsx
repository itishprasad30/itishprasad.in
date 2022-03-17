import clsx from "clsx";
import * as React from "react";

export default function Accent({ children, className }) {
  return (
    <span
      className={clsx(
        className,
        "transition-colors",
        "rounded bg-gradient-to-r from-pink-500 to-yellow-500 p-[2px] px-1 text-gray-50"
      )}
    >
      {children}
    </span>
  );
}

import clsx from "clsx";
import * as React from "react";

export default function Accent({ children, className }) {
  return (
    <span
      className={clsx(
        className,
        "transition-colors",
        "bg-gradient-to-t from-green-300 via-green-300 to-green-100"
      )}
    >
      {children}
    </span>
  );
}

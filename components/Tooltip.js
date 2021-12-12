import clsx from "clsx";
import * as React from "react";
import { Tooltip as TippyTooltip } from "react-tippy";

export default function Tooltip({
  content,
  children,
  className,
  spanClassName,
  withUnderline = false,
}) {
  return (
    <TippyTooltip
      trigger="mouseenter"
      interactive
      html={
        <div
          className={clsx(
            className,
            "inline-block max-w-md p-2 text-gray-600 bg-white rounded-md shadow-md dark:bg-black dark:text-gray-200",
            "border dark:border-gray-600 "
          )}
        >
          {content}
        </div>
      }
    >
      {withUnderline ? (
        <span
          className={clsx(spanClassName, "underline")}
          style={{ textDecorationStyle: "dotted" }}
        >
          {children}
        </span>
      ) : (
        <>{children}</>
      )}
    </TippyTooltip>
  );
}

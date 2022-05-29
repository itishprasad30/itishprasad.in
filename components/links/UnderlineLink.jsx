import * as React from "react";
import clsx from "clsx";

import UnstyledLink from "./UnstyledLink";

const UnderLineLink = ({ children, className, ...rest }, ref) => {
  return (
    <UnstyledLink
      ref={ref}
      {...rest}
      className={clsx(
        "un custom-link inline-flex items-center font-semibold",
        "focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-offset-2",
        // "border-b border-dotted border-black hover:border-black/0",
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
};
export default UnderLineLink;

import clsx from "clsx";
import Link from "next/link";

export default function UnstyledLink({
  children,
  href,
  openNewTab,
  className,
  ...rest
}) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith("/") && !href.startsWith("#");

  if (!isNewTab) {
    return (
      <Link href={href}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={clsx(className, "cursor-newtab")}
    >
      {children}
    </a>
  );
}

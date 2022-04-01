import React, { useState, useEffect } from "react";

// @ts-ignore
// import styles from "./styles.css";

// type Props = React.HTMLAttributes<HTMLButtonElement> & {
//   top?: number,
//   smooth?: boolean,
//   svgPath?: string,
//   viewBox?: string,
//   component?: any,
//   width?: string,
//   height?: string,
// };

function scrollToTop(smooth = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}

const ScrollToTop = ({
  top = 350,
  className = "scroll-to-top",
  color = "#ffff",
  smooth = false,

  component = "",
  viewBox = "0 0 256 256",
  svgPath = "M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z",
  width = "670px",
  height = "670px",
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top);
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    // Remove listener on unmount
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {visible && (
        <button
          title="Scroll To Top"
          className={className}
          onClick={() => scrollToTop(smooth)}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          {component || (
            <svg width={width} height={height} fill={color} viewBox={viewBox}>
              <path d={svgPath} />
            </svg>
          )}
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

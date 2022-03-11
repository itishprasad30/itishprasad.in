import clsx from "clsx";
import React from "react";
import IP from "../components/IP";

const home = () => {
  return (
    <div>
      <IP
        className={clsx(
          " right-0 top-0 left-2/4 h-auto ",
          "translate-y-[50%] transform-gpu",
          "w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]",
          "z-[-1] opacity-60 "
        )}
      />
    </div>
  );
};

export default home;

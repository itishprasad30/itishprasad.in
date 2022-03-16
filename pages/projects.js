import React from "react";
import Projects from "../components/Projects";
import useLoaded from "../hooks/useLoaded";
import clsx from "clsx";

const projects = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isLoaded = useLoaded();

  return (
    <div>
      <section className={clsx(isLoaded && "fade-in-start")}>
        <div data-fade="2">
          <Projects />
        </div>
      </section>
    </div>
  );
};

export default projects;

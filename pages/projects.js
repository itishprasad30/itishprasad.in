import React from "react";
import Projects from "../components/Projects";
import useLoaded from "../hooks/useLoaded";
import clsx from "clsx";
import Seo from "../components/layouts/Seo";

const projects = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isLoaded = useLoaded();

  return (
    <div>
      <Seo
        templateTitle="Projects"
        description="Show case of my works in projects"
      />
      <section className={clsx(isLoaded && "fade-in-start")}>
        <div data-fade="2">
          <Projects />
        </div>
      </section>
    </div>
  );
};

export default projects;

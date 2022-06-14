import userData from "../Constants/data";
import Image from "next/image";
import Link from "next/link";
import ViewCounter from "./ViewCounter";
const Projects = () => {
  return (
    <section className=" ">
      <div className="mx-auto h-48 max-w-xl  ">
        <h1 className=" py-20 text-center text-4xl font-bold md:text-left md:text-6xl">
          Projects
        </h1>
        <p className="hidden">
          <ViewCounter slug="projects" />
        </p>
        <p className="mb-1 text-xl font-normal tracking-tight text-black dark:text-white md:text-xl">
          Showcase of my works on frontend development.
        </p>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F0E7DB] dark:bg-[#202023]">
        <div className="mx-auto  grid max-w-4xl grid-cols-1 gap-8 py-20 pb-20 md:grid-cols-2 lg:grid-cols-3 ">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              sourceCode={proj.githubLink}
              description={proj.description}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({
  title,
  link,
  imgUrl,
  number,
  sourceCode,
  description,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-lg border-2 border-gray-700 bg-[#F0E7DB] p-2 transition-all duration-500 ease-in-out hover:scale-105 dark:bg-[#202023]">
      <a href={link} className="block w-full shadow-2xl">
        <div className="relative overflow-hidden">
          <div className="h-72 object-cover ">
            <Image
              src={imgUrl}
              alt="portfolio"
              layout="fill"
              placeholder="blur"
              blurDataURL={imgUrl}
              className="h-full w-full transform rounded-xl object-cover  "
            />
          </div>
          <h1 className="absolute top-10 left-10 rounded-md  bg-blue-900 px-2 text-xl font-bold text-gray-50">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-xl font-bold text-yellow-600">
            {number.length === 1 ? "0" + number : number}
          </h1>
        </div>
      </a>
      <div className="h-auto w-auto rounded-xl  ">
        <h2 className="mb-5 font-mono text-xl font-bold">{title}</h2>
        <p className="text-xs text-gray-700 dark:text-gray-100">
          {description}
        </p>
        <div className="flex w-full space-x-2 rounded-md p-2 ">
          <button className="flex-auto rounded-xl bg-red-500 p-2 font-mono text-white hover:bg-red-600">
            <a target="_blank" rel="noreferrer" href={link}>
              Live Demo
            </a>
          </button>
          <button className="flex-auto rounded-xl bg-gray-600 p-2 font-mono text-white hover:bg-slate-700">
            <Link href={sourceCode}>Source Code</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

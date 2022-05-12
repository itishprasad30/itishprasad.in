import clsx from "clsx";
import TechStack from "../components/Techstack";
import Image from "next/image";
import useLoaded from "../hooks/useLoaded";
import ViewCounter from "../components/ViewCounter";
import Seo from "../components/layouts/Seo";
import ScrollToTop from "../components/ScrollToTop";

const AboutPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isLoaded = useLoaded();

  return (
    <div>
      <ScrollToTop smooth />
      <Seo templateTitle="About" description="about my work" />
      <section className={clsx(isLoaded && "fade-in-start")}>
        <div className="layout min-h-main py-20">
          <div className="hidden">
            <ViewCounter slug="about" />
          </div>
          <h2
            className="mb-4  text-center text-3xl font-bold md:text-left md:text-4xl "
            data-fade="1"
          >
            About
          </h2>
          <h1
            data-fade="2"
            className="mt-1 w-fit cursor-pointer rounded bg-gradient-to-r from-pink-500 to-yellow-500 px-2 text-center text-2xl font-semibold text-white    md:text-left md:text-4xl"
          >
            Itish Prasad Sahoo
          </h1>
          <div
            data-fade="3"
            className="mt-4 flex flex-col items-center justify-center space-y-10 md:items-start md:justify-start "
          >
            {" "}
            <Image
              src="https://avatars.githubusercontent.com/u/60768713?v=4"
              alt="Profile Image"
              placeholder="blur"
              blurDataURL="https://avatars.githubusercontent.com/u/60768713?v=4"
              height={160}
              width={160}
              className="mb-5 rounded-xl md:rounded-xl "
            />
            <article className="mb-3  text-base" data-fade="4">
              <p className="mb-2  selection:bg-yellow-400">
                Hello! I am Itish. I started learning web development in May
                2020, which is the start of the pandemic. I have nothing much to
                do so I decided to learn web development from a udemy course,
                then started watching a bunch of youtube videos to explore more
                about web development especially frontend development.
              </p>

              <p className="mb-2 selection:bg-purple-400">
                There are a lot of things and technologies to learn in frontend
                development and I am motivated to learn as much as possible. I
                enjoy learning something new and getting feedback to make myself
                better and improve.
              </p>
              <p className="mb-2 selection:bg-red-400">
                In this website I will be writing some blogs and showcase my
                projects. I believe that writing what I have learned is the best
                way to remember things, and I can share my knowledge along the
                way. So do contact me and I will be very happy to help!
              </p>
            </article>
            <h3 datatype="5" className="mt-12">
              Current Favorite Tech Stack
            </h3>
            <figure className="mt-2">
              <TechStack />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

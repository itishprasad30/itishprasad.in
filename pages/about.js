import clsx from "clsx";
import TechStack from "../components/Techstack";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <section className={clsx("fade-in-start")}>
        <div className="layout min-h-main py-20">
          <h2 className="text-3xl text-center md:text-4xl md:text-left font-semibold">
            About
          </h2>
          <h1 className="mt-1 cursor-pointer text-center md:text-left text-2xl md:text-4xl font-semibold hover:underline text-green-500">
            Itish Prasad Sahoo
          </h1>
          <div className="mt-4  ">
            {" "}
            <Image
              src="https://avatars.githubusercontent.com/u/60768713?v=4"
              alt="Profile Image"
              height={160}
              width={160}
              className="rounded-xl md:rounded-xl mb-5 "
            />
            <article className="text-base  mb-3">
              <p className="mb-2">
                Hello! I am Itish. I started learning web development in May
                2020, which is the start of the pandemic. I have nothing much to
                do so I decided to learn web development from a udemy course,
                then started watching a bunch of youtube videos to explore more
                about web development especially frontend development.
              </p>
              <p className="mb-2">
                There are a lot of things and technologies to learn in frontend
                development and I am motivated to learn as much as possible. I
                enjoy learning something new and getting feedback to make myself
                better and improve.
              </p>
              <p className="mb-2">
                In this website I will be writing some blogs and showcase my
                projects. I believe that writing what I have learned is the best
                way to remember things, and I can share my knowledge along the
                way. So do contact me and I will be very happy to help!
              </p>
            </article>
            <h3 className="mt-12">Current Favorite Tech Stack</h3>
            <figure className="mt-2">
              <TechStack />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;

import userData from "../Constants/data";
const Works = () => {
  return (
    <section className=" ">
      <div className="max-w-xl mx-auto h-48  ">
        <h1 className=" text-4xl md:text-6xl font-bold py-20 text-center md:text-left">
          Works
        </h1>
        <p className="font-normal text-xl md:text-xl tracking-tight mb-1 text-black dark:text-white">
          In This page will shows all my projects Works ⬇️
        </p>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-[#202023]">
        <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover ">
          <img
            src={imgUrl}
            alt="portfolio"
            className="rounded-xl transform hover:scale-125 transition duration-1000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-800 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-white font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};

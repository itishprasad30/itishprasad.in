import Section from "../components/section";

const posts = () => {
  return (
    <div>
      <Section>
        <div>
          <h1 className="font-semibold text-2xl md:text-3xl">
            All Posts will appear here{" "}
          </h1>
          <p>Description</p>
          <p>
            {" "}
            I am trying building Mdx(Markdown text with react[jsx]) Content BLog
            posts ,so this will take some time.{" "}
          </p>
          <p>Thank you for your Patience</p>
        </div>
      </Section>
    </div>
  );
};

export default posts;

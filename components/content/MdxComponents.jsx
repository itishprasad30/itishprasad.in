import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import CloudinaryImg from "../images/CloudinaryImg";

import CustomCode, { Pre } from "./CustomCode";
// import Quiz from "@/components/content/blog/Quiz";
// import GithubCard from "@/components/content/card/GithubCard";
// import CustomCode, { Pre } from "@/components/content/CustomCode";
// import SplitImage, { Split } from "@/components/content/SplitImage";
// import TweetCard from "@/components/content/TweetCard";
// import CustomLink from "@/components/links/CustomLink";
// import TechIcons from "@/components/TechIcons";

const MDXComponents = {
  Image,
  CloudinaryImg: CloudinaryImg,
  pre: Pre,
  code: CustomCode,
  LiteYouTubeEmbed,
};

export default MDXComponents;

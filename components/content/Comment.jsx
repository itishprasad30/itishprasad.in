import { Giscus, Theme } from "@giscus/react";
import { useTheme } from "next-themes";
const isProd = process.env.NODE_ENV === "deveslopment";
const commentFlag = isProd;
const Comment = () => {
  const { theme } = useTheme();
  console.log(process.env.NODE_ENV);
  return commentFlag ? (
    <Giscus
      key={theme}
      repo="itishprasad30/itishprasad.in"
      repoId="R_kgDOGccxCg"
      category="General"
      categoryId="DIC_kwDOGccxCs4COLo3"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme="dark"
    />
  ) : (
    <div>comments are goes here</div>
  );
};
export default Comment;

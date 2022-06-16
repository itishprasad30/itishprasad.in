import React from "react";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { commentFlag } from "../Constants/env";

const Comment = () => {
  const { theme } = useTheme();

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
      inputPosition="bottom"
      lang="en"
      loading="lazy"
      theme={theme}
    />
  ) : (
    <h1>Nothing To Show</h1>
  );
};

export default Comment;

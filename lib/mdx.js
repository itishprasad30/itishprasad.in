import { readFileSync } from "fs";
import { readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
// import fs from "fs";
// import path from "path";
import readingTime from "reading-time";

//mdx
import { bundleMDX } from "mdx-bundler";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

// This is simple way

// export async function getAllFilesFrontmatter(type) {
//   // read all dir
//   let files = readdirSync(join(process.cwd(), "data", type));

//   const posts = await Promise.all(
//     files.map((file) => {
//       const mdWithData = fs.readFileSync(
//         path.join(`data/${type}`, file),
//         "utf-8"
//       );
//       let { data: frontMatter } = matter(mdWithData);
//       return {
//         frontMatter,
//         slug: file.split(".")[0],
//       };
//     })
//   );
//   return posts;
// }

export async function getFiles(type) {
  return readdirSync(join(process.cwd(), "data", type));
}

export async function getFileBySlug(type, slug) {
  // read each mdx file in the library dir.
  const source = readFileSync(
    join(process.cwd(), "data", type, `${slug}.mdx`),
    "utf8"
  );

  const { code, frontmatter } = await bundleMDX({
    source: source,
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["hash-anchor"],
            },
          },
        ],
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
}

export async function getAllFilesFrontmatter(type) {
  // gives array list of files in that particular folder
  const files = readdirSync(join(process.cwd(), "data", type));

  // it will convert files to mdx and retive slug and readingtime in frontmatter

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), "data", type, postSlug),
      "utf-8"
    );
    const { data } = matter(source);

    const res = [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
    return res;
  }, []);
}

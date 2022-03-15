import Head from "next/head";

import { useRouter } from "next/router";

const defaultMeta = {
  title: "Itish Prasad",
  siteName: "itishprasad-in.vercel.app",
  description:
    "An online portfolio and blog by Itish Prasad . Showcase of my projects, and some thoughts about website development.",
  url: "https://itishprasad-in.vercel.app",
  type: "website",
  robots: "follow,index",
};

export default function Seo(props) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle
    ? `${props.templateTitle}` | `${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Itish Prasad's homepage" />
      <meta name="author" content="Itish Prasad" />
      <meta name="author" content="itish_prasad" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itish_prasad" />
      <meta name="twitter:creator" content="itish prasad" />
      <meta name="twitter:image" content="/card.png" />
      <meta property="og:site_name" content="Itish Prasad's Homepage" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/card.png" />
    </Head>
  );
}

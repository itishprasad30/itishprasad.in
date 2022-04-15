import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: "Itish Prasad",
  siteName: "itishprasad-in.vercel.app",
  description:
    "An online portfolio and blog by Itish Prasad .Showcase of my Projects and thoughts about web developemnt.",
  url: "https://itishprasad-in.vercel.app",
  type: "website",
};

export default function Seo(props) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.title}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Itish Prasad" />
      <meta name="description" content={meta.description} />
      <meta name="author" content="itish_prasad" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/images/Logo.png" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itish_prasad" />
      <meta name="twitter:creator" content="itish prasad" />
      <meta name="twitter:image" content="/card.png" />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/card.png" />
      <meta name="theme-color" content="#fffff" />
    </Head>
  );
}

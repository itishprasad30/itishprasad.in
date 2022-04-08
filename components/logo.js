import Link from "next/link";
import Image from "next/image";
import UnderLineLink from "./links/UnderlineLink";

const Logo = () => {
  const footPrintImg = `/images/Logo.png`;

  return (
    <Link href="/">
      <a>
        <div className="flex flex-row gap-2">
          <Image
            src={footPrintImg}
            width={20}
            height={20}
            alt="logo"
            className="rounded"
          />
          <UnderLineLink
            href="/"
            className="font-serif text-2xl font-bold leading-tight"
          >
            Itish Prasad
          </UnderLineLink>
          {/* <p className="ml-3 rounded-lg font-serif font-bold text-gray-700 underline-offset-4 transition-colors hover:underline dark:text-white  ">
            Itish Prasad
          </p> */}
        </div>
      </a>
    </Link>
  );
};

export default Logo;

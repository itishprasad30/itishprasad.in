import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  const footPrintImg = `/images/Logo.png`;

  return (
    <Link href="/">
      <a>
        <div className="flex flex-row">
          <Image
            src={footPrintImg}
            width={20}
            height={20}
            alt="logo"
            className="rounded"
          />
          <p className="ml-3 rounded-lg font-serif font-bold text-gray-700 underline underline-offset-4 transition-colors dark:text-white  ">
            Itish Prasad
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Logo;

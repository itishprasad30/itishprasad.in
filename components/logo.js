import Link from "next/link";
import Image from "next/image";

// import styled from "@emotion/styled";

// const LogoBox = styled.span`
//   font-weight: bold;
//   font-size: 18px;
//   display: inline-flex;
//   align-items: center;
//   height: 30px;
//   line-height: 20px;
//   padding: 10px;
//   img {
//     transition: 200ms ease;
//   }
//   &:hover img {
//     transform: rotate(20deg);
//   }
// `;

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
          <p className="font-bold rounded-lg font-serif ml-3 text-gray-700 ">
            Itish Prasad
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Logo;

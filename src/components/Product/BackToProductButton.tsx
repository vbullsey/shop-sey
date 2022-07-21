import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

function BackToProductButton() {
  return (
    <Link href="/" passHref>
      <a
        aria-label="back-to-products"
        className="border border-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-primary focus:outline-none w-full hover:bg-primary rounded-sm"
      >
        <FaArrowLeft className="w-4 mr-2 inline-flex" />
        Volver
      </a>
    </Link>
  );
}

export default BackToProductButton;

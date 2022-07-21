import Image from "next/image";
import { ProductProps } from "@/pages/products/[id]";
import Slider from "react-slick";

const settings = {
  customPaging: function (i: number) {
    return (
      <div className="relative h-[25px] w-[25px] ">
        <Image
          className="object-cover"
          layout="fill"
          quality={100}
          src={`/assets/products/trunks/${i + 1}.webp`}
        />
      </div>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProductImage: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="w-full md:w-2/2 max-w-md rounded shadow-lg">
      <Slider {...settings} className="">
        {product && product.images && product.images.length > 0 ? (
          product?.images?.map((nodeImage) => (
            <div className="relative h-[480px] w-[280px] ">
              <Image
                className="object-cover"
                quality={100}
                src={`/assets/products/${product.slug}/${nodeImage}`}
                layout="fill"
                alt="NIKE AIR"
              />
            </div>
          ))
        ) : (
          <div className="relative h-[480px] w-[280px] ">
            <Image
              className="object-cover"
              quality={100}
              src="/assets/products/default_image.png"
              layout="fill"
              alt="NIKE AIR"
            />
          </div>
        )}
      </Slider>
      {/* <div className="relative h-96">
        <Image
          src={product?.url ? product.url : "/akatsuki.png"}
          alt="demo"
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="relative flex border-t border-palette-lighter">
        <button
          aria-label="left-scroll"
          className="h-32 bg-palette-lighter hover:bg-palette-light  absolute left-0 z-10 opacity-75"
        >
          <FaArrowLeft className="w-3 mx-1" />
        </button>
        <div
          style={{ scrollBehavior: "smooth" }}
          className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
        >
          <button className="relative w-40 h-32 flex-shrink-0 rounded-sm ">
            <Image
              src={product?.url ? product.url : "/akatsuki.png"}
              alt="demo"
              layout="fill"
              className=""
            />
          </button>
        </div>
        <button
          aria-label="right-scroll"
          className="h-32 bg-palette-lighter hover:bg-palette-light  absolute right-0 z-10 opacity-75"
        >
          <FaArrowRight className="w-3 mx-1 " />
        </button>
      </div> */}
    </div>
  );
};

export default ProductImage;

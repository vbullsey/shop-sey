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
              src={product.image}
              layout="fill"
              alt="NIKE AIR"
            />
          </div>
        )}
      </Slider>
    </div>
  );
};

export default ProductImage;

import { ProductProps } from "@/pages/products/[id]";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
// import Slider from "react-slick";
// import Image from "next/image";

// const settings = {
//   dots: true,
//   arrows: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

const ProductSection: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <ProductImage product={product} />
        <ProductDetails product={product} />
      </div>
      {/* <div className="flex flex-col justify-center  max-w-md  md:w-2/2 rounded shadow-lg">
        <h2 className="text-3xl flex justify-center my-6">
          Productos similares
        </h2>
        <Slider {...settings}>
          {data.map((nodeImage) => (
            <div className="relative h-[303px] w-[303px]">
              <Image
                className="object-contain"
                quality={100}
                src={`${nodeImage.url}`}
                layout="fill"
                alt="NIKE AIR"
              />
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default ProductSection;

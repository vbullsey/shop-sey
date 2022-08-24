import { ProductProps } from "@/pages/products/[id]";
import Rating from "@/ui/Data input/Rating";

const ProductInfo: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="font-primary">
      <h1 className="flex justify-center leading-relaxed text-white font-extrabold text-3xl py-2 sm:py-4 md:justify-start">
        {product.title}
      </h1>
      <div className="flex justify-center md:justify-start mb-4">
        <Rating>
          {[...Array.from(Array(5).keys())].map((num, i) => (
            <Rating.Item
              disabled
              key={i}
              name="rating-2"
              className={`mask mask-star-2  ${num === 4 ? "" : "bg-primary"}`}
              defaultChecked={num === 4 ? false : true}
            />
          ))}
        </Rating>
      </div>
      <p className="font-medium text-lg">{product.description}</p>
      <div className="flex justify-center text-xl font-medium py-2 px-1 md:justify-start">
        <span className="text-2xl text-white">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductInfo;

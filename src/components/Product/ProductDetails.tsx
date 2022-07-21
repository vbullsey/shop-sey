import ProductForm from "./ProductForm";
import ProductInfo from "./ProductInfo";

import { ProductProps } from "@/pages/products/[id]";
import ProductMoreInfo from "./ProductMoreInfo";

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <ProductInfo product={product} />
      <ProductForm />

      <div>
        <ProductMoreInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;

import { ProductProps } from "@/pages/products/[id]";
import Collapse from "@/ui/Data display/Collapse";
import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ProductMoreInfo: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="mt-4">
      <div>
        <Collapse
          className="border border-primary bg-base-100 rounded-box"
          icon="plus"
          checkbox
        >
          <Collapse.Title className="text-xl font-medium">
            Descripción
          </Collapse.Title>
          <Collapse.Content>{product?.description}</Collapse.Content>
        </Collapse>
      </div>
      <div className="mt-4">
        <span className="flex items-center gap-2">
          Compartir:{" "}
          <FaFacebook className="hover:fill-primary cursor-pointer" />
          <FaTwitter className="hover:fill-primary cursor-pointer" />
          <FaWhatsapp className="hover:fill-primary cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default ProductMoreInfo;

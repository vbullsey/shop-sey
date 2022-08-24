import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { SWRConfig } from "swr";

import IndexLayout from "@/layout/IndexLayout";

import { FALLBACK_CATEGORIES, FALLBACK_PRODUCTS } from "@/constants/fallback";

export type ProductInfoProps = {
  title: string;
  description: string;
  price: string;
  images: string;
};

export type CategoriesProps = {
  id: string;
  title: string;
  url: string;
};

export type IndexProps = {
  products: ProductInfoProps[];
  categories: CategoriesProps[];
  fallback: any;
};

const Index: React.FC<IndexProps> = (props) => {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <IndexLayout />
    </SWRConfig>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  try {
    const session = await getSession(context);

    const productResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/product`
    );

    const products = await productResponse.json();
    return {
      props: {
        fallback: {
          [FALLBACK_PRODUCTS]: products,
        },
        session,
      },
    };
  } catch (e) {
    return {
      props: { products: [], categories: [] },
    };
  }
}

export default Index;

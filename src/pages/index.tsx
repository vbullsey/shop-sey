import HomeSection from "@/components/Home/HomeSection";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export type ProductInfoProps = {
  title: string;
  description: string;
  price: string;
  images: string;
};

export type ProductProps = {
  products: ProductInfoProps[];
};

const Index: React.FC<ProductProps> = ({ products }) => {
  return (
    <>
      <div className="mx-4">
        <div className="flex justify-center ml-2 flex-col">
          <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <HomeSection products={products} />
          </section>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  try {
    const session = await getSession(context);
    const data = await fetch(`http://localhost:8000/user/products`);
    const products = await data.json();
    return {
      props: { session, products },
    };
  } catch (e) {
    return {
      props: { products: [] },
    };
  }
}

export default Index;

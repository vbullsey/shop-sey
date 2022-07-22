import HomeSection from "@/components/Home/HomeSection";
import MainLayout from "@/layout/MainLayout";
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

const Index: React.FC<ProductProps> = ({ categories, products }) => {
  return (
    <MainLayout navBarData={categories}>
      <div className="mx-4">
        <div className="flex justify-center ml-2 flex-col">
          <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <HomeSection products={products} />
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  try {
    const session = await getSession(context);
    const productResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/products`
    );
    const categoriesResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/config/categories`
    );

    const products = await productResponse.json();
    const categories = await categoriesResponse.json();
    return {
      props: { session, categories, products },
    };
  } catch (e) {
    return {
      props: { products: [] },
    };
  }
}

export default Index;

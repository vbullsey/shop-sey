import Card from "@/components/Card/Card";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import MainLayout from "@/layout/MainLayout";
import Button from "@/ui/Actions/Button";
import Pagination from "@/ui/Navigation/Pagination";
import { NextPageContext } from "next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { BsSortAlphaDown, BsSortAlphaDownAlt } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
import { GiCutDiamond } from "react-icons/gi";

const itemsMenuUser = [
  {
    title: "A-Z",
    icon: <BsSortAlphaDown />,
  },
  {
    title: "Z-A",
    icon: <BsSortAlphaDownAlt />,
  },
  {
    title: "Popular",
    icon: <BiRocket />,
  },
  {
    title: "Destacado",
    icon: <GiCutDiamond />,
  },
];

const NewReleases = ({ products, categories }) => {
  return (
    <MainLayout navBarData={categories}>
      <div className="min-h-screen py-12 ">
        <div className="flex flex-row justify-between mx-4">
          <span className="rounded-lg px-4 btn">Productos</span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Ordenar por</span>
            <DropdownMenu title="A-Z" data={itemsMenuUser} />
          </div>
        </div>
        <section>
          <div className="py-6">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                {products &&
                  products.map((product, i) => (
                    <div className="flex flex-col">
                      <Card product={product} />
                    </div>
                  ))}
              </div>
              <div className="flex justify-center mt-8 items-center">
                <Pagination>
                  <Button>
                    <FaArrowLeft />
                  </Button>
                  <Button active>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                  <Button>
                    <FaArrowRight />
                  </Button>
                </Pagination>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  try {
    const productResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/products`
    );
    const categoriesResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/config/categories`
    );

    const products = await productResponse.json();
    const categories = await categoriesResponse.json();
    return {
      props: { categories, products },
    };
  } catch (e) {
    return {
      props: { products: [] },
    };
  }
}
export default NewReleases;

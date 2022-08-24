import HomeSection from "@/components/Home/HomeSection";
import React from "react";
import useSWR from "swr";

const IndexLayout = () => {
  const { data: dataProducts } = useSWR("/product");

  return (
    <div className="mx-4">
      <div className="flex justify-center ml-2 flex-col">
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
          <HomeSection dataProducts={dataProducts} />
        </section>
      </div>
    </div>
  );
};

export default IndexLayout;

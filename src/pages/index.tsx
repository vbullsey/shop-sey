import Card from "@/components/Card/Card";

const listProducts = [
  {
    title: "Goku Black Saiyan Rouse",
    price: "$15.000",
    url: "/assets/products/figures/black.webp",
  },
  {
    title: "Goku SSJ 4",
    price: "$18.000",
    url: "/assets/products/figures/gokussj4.webp",
  },
  {
    title: "Future Trunks",
    price: "$15.000",
    url: "/assets/products/figures/trunks.webp",
  },
  {
    title: "Venom",
    price: "$15.000",
    url: "/assets/products/figures/venom.webp",
  },
];

const Index = () => {
  return (
    <div className="mx-4">
      <div className="flex justify-center ml-2 flex-col">
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Productos destacados</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {listProducts.map((product, i) => {
                return (
                  <div key={i} className="flex flex-col ">
                    <Card product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;

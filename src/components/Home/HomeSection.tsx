import Card from "../Card/Card";
import CardTwo from "../Card/CardTwo";

const HomeSection: React.FC = ({ dataProducts }) => {
  return (
    <div className="container p-6 mx-auto space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Productos destacados</h2>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dataProducts?.products &&
          dataProducts.products.map((product, i) => (
            <div key={i} className="flex flex-col">
              <CardTwo product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeSection;

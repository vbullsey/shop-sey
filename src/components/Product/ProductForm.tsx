import Button from "@/ui/Actions/Button";
import Select from "@/ui/Data input/Select";
import { FaShoppingCart } from "react-icons/fa";

function ProductForm() {
  const { Option } = Select;

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="flex flex-col items-start space-y-1 flex-grow">
          <label className="text-base">Cantidad</label>
          <Select className="w-full">
            <Option value={null} disabled selected>
              Selecciona la cantidad
            </Option>
            <Option value={"1"}>1</Option>
            <Option value={"2"}>2</Option>
            <Option value={"3"}>3</Option>
          </Select>
        </div>
      </div>

      <div className="mt-2 text-white">
        <span>Máximo 3 unidades por persona</span>
      </div>

      <Button
        color="primary"
        className="pt-3 pb-2 text-white w-full mt-6 rounded-sm font-primary font-semibold text-xl flex 
        justify-center items-baseline"
        aria-label="cart-button"
      >
        Añadir al carrito
        <FaShoppingCart className="w-5 ml-2" />
      </Button>
    </div>
  );
}

export default ProductForm;

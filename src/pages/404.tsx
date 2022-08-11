import Button from "@/ui/Actions/Button";
import Link from "next/link";

const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-4 min-h-screen">
      <h1 className="text-4xl">Ups!</h1>
      <h2 className="text-xl">La página que buscas no existe</h2>
      <Link href="/">
        <a>
          <Button color="primary" className="text-white">
            Volver al Inicio
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default NotFound404;

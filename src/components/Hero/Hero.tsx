import Carousel from "@/ui/Data display/Carousel";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <Carousel
          display="sequential"
          width="full"
          className="h-[300px] md:h-full "
        >
          <Carousel.Item src="/akatsuki.png" alt="akatsuki" />
          <Carousel.Item src="/akatsuki.png" alt="akatsuki" />
          <Carousel.Item src="/akatsuki.png" alt="akatsuki" />
        </Carousel>
      </div>
      <div className="p-4 py-8 bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              20% de Descuento
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Rápido! Usa el código:</span>
              <span className="font-bold text-lg">SEYE</span>
            </div>
            <button className="btn btn-primary lg:mt-0 py-3">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Carousel from "@/ui/Data display/Carousel";
import React from "react";

const carouselImages = [
  {
    src: "/akatsuki.png",
    alt: "banner_akatsuki",
  },
  {
    src: "/one_piece.jpg",
    alt: "banner_one_piece",
  },
  {
    src: "/banner1.webp",
    alt: "banner_otako",
  },
];

const Hero = () => {
  return (
    <div>
      <div>
        <Carousel
          display="sequential"
          width="full"
          className="h-[300px] md:h-[400px] lg:h-[500px]"
        >
          {carouselImages.map((item, i) => (
            <Carousel.Item key={i} src={item.src} alt={item.alt} />
          ))}
        </Carousel>
      </div>
      <div className="p-4 py-4 bg-black border-y-2 border-primary">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              20% de Descuento
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Rápido! Usa el código:</span>
              <span className="font-bold text-lg">STUAR</span>
            </div>
            <button className="btn btn-primary lg:mt-0 py-3 text-white">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

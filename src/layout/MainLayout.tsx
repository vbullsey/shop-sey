import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import { useRouter } from "next/router";
import { Meta } from "./Meta";

const MainLayout = ({ categories, children }: any) => {
  const { asPath } = useRouter();

  console.log("categories", categories);

  return (
    <div className="flex h-screen w-full overflow-x-hidden">
      <Meta />
      <div className="flex flex-1 flex-col  ">
        <NavBar categories={categories} />
        {asPath === "/" && <Hero />}
        <div className="p-1 bg-neutral">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

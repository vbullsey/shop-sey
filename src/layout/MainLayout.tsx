import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import { useRouter } from "next/router";
import { Meta } from "./Meta";

// https://stackoverflow.com/questions/70939164/next-js-pass-getserversideprops-and-children-props-in-the-page-component

const MainLayout = ({ navBarData, children }: any) => {
  const { asPath } = useRouter();

  return (
    <div className="flex  h-screen w-full overflow-x-hidden">
      <Meta />
      <div className="flex flex-1 flex-col  ">
        <NavBar navBarData={navBarData} />
        {asPath === "/" && <Hero />}
        <div className=" bg-neutral ">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

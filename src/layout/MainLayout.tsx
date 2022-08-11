import Alert from "@/components/Alert/Alert";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import { useRouter } from "next/router";
import { Meta } from "./Meta";

import AlertLayout from "./AlertLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// https://stackoverflow.com/questions/70939164/next-js-pass-getserversideprops-and-children-props-in-the-page-component

const contextClass = {
  success: "bg-primary",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
};

const MainLayout = ({ navBarData, children }: any) => {
  const { asPath } = useRouter();

  return (
    <div className="flex  h-screen w-full overflow-x-hidden">
      <Meta />
      <div className="flex flex-1 flex-col">
        <NavBar navBarData={navBarData} />
        <ToastContainer />

        {asPath === "/" && <Hero />}
        <div className=" bg-neutral ">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";

const MainLayout = ({ children }: any) => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-1 flex-col">
        <NavBar />
        <Hero />
        <div className="p-1 bg-neutral">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;

import { AppConfig } from "@/App.config";

const Index = () => {
  return (
    <div className="h-full dark:bg-black">
      <header className="bg-white dark:bg-black">
        <nav>{AppConfig.title}</nav>
      </header>
      <div className="mx-auto mt-4 flex w-1/2 items-center justify-center">
        main
      </div>
    </div>
  );
};

export default Index;

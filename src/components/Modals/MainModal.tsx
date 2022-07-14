import Button from "@/ui/Actions/Button";
import Modal from "@/ui/Actions/Modal";
import Divider from "@/ui/Layout/Divider";
import Tabs from "@/ui/Navigation/Tabs";
import Tab from "@/ui/Navigation/Tabs/Tab";
import { useState } from "react";

const registerFormSchema = [
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "",
    required: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "user",
    type: "text",
    label: "Usuario",
    placeholder: "",
    required: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "",
    required: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "birthday",
    label: "Cumpleaños",
    type: "date",
    placeholder: "Birthday",
    required: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "code",
    label: "Código",
    type: "text",
    placeholder: "",
    required: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
          clipRule="evenodd"
        />
        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
      </svg>
    ),
  },
];

const loginFormSchema = [
  {
    name: "user",
    label: "Email o Usuario",
    type: "text",
    placeholder: "",
    required: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    placeholder: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const MainModal = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <Modal.Header className="font-bold">
        <div className="flex flex-col gap-4 items-center">
          <Tabs size="md" value={value} onChange={(e) => setValue(Number(e))}>
            <Tab key={0} className="tab-bordered" value={0}>
              Registrarse
            </Tab>
            <Tab key={1} className="tab-bordered" value={1}>
              Login
            </Tab>
          </Tabs>
        </div>
      </Modal.Header>

      <Modal.Body>
        {value === 0 ? <RegisterLayout /> : <LoginLayout />}
      </Modal.Body>
    </>
  );
};

const LoginLayout = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>
      {loginFormSchema.map((item, i) => (
        <div>
          <label className="flex mb-1">
            <span className="text-sm ">
              {item.label}{" "}
              <span className="ml-0.5 text-primary">
                {item.required ? "*" : "(Opcional)"}
              </span>
            </span>
          </label>
          <div
            key={i}
            className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl"
          >
            {item.icon}
            <input
              id={item.name}
              className="pl-2 w-full outline-none border-none bg-base-100"
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
            />
          </div>
        </div>
      ))}
      <Button
        type="submit"
        color="primary"
        className="block w-full mt-5 font-semibold mb-2"
      >
        Login
      </Button>
      <div className="flex justify-between mt-4">
        <span className="text-sm ml-2 hover:text-primary cursor-pointer hover:-translate-y-1 duration-500 transition-all">
          Forgot Password ?
        </span>

        <span className="text-sm ml-2 hover:text-primary cursor-pointer hover:-translate-y-1 duration-500 transition-all">
          Don't have an account yet?
        </span>
      </div>
    </form>
  );
};

const RegisterLayout = () => {
  const handleSubmit = (e) => e.preventDefault();
  return (
    <form onSubmit={handleSubmit}>
      {registerFormSchema.map((item, i) => (
        <>
          {item.type === "text" || item.type === "password" ? (
            <>
              <label className="flex mb-1">
                <span className="text-sm capitalize">
                  {item.label}
                  <span className="ml-0.5 text-primary">
                    {item.required ? "*" : "(Opcional)"}
                  </span>
                </span>
              </label>
              <div
                key={i}
                className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl"
              >
                {item.icon}
                <input
                  id={item.name}
                  className="pl-2 w-full outline-none border-none bg-base-100"
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              </div>
            </>
          ) : item.type === "date" ? (
            <>
              <label className="flex mb-1">
                <span className="text-sm">
                  {item.label} <span className="ml-0.5 text-primary">*</span>
                </span>
              </label>
              <div
                key={i}
                className="flex  items-center border-2 mb-2 py-2 px-3 rounded-2xl"
              >
                <input
                  id={item.name}
                  className="pl-2 w-1/3 outline-none border-none bg-base-100"
                  type="number"
                  name={item.name}
                  placeholder="Día"
                />
                <input
                  id={item.name}
                  className="pl-2 w-1/3  outline-none border-none bg-base-100"
                  type="number"
                  name={item.name}
                  placeholder="Mes"
                />
                <input
                  id={item.name}
                  className="pl-2 w-1/3  outline-none border-none bg-base-100"
                  type="number"
                  name={item.name}
                  placeholder="Año"
                />
              </div>
            </>
          ) : null}
        </>
      ))}
      <Divider />
      <Button
        type="submit"
        color="primary"
        className="block w-full mt-5 font-semibold mb-2"
      >
        Registrarse
      </Button>
      <div className="flex justify-between mt-4">
        <span className="text-sm ml-2 hover:text-primary cursor-pointer hover:-translate-y-1 duration-500 transition-all">
          Olvidaste tú cuenta?
        </span>

        <span className="text-sm ml-2 hover:text-primary cursor-pointer hover:-translate-y-1 duration-500 transition-all">
          ¿Aún no tienes cuenta?
        </span>
      </div>
    </form>
  );
};
export default MainModal;

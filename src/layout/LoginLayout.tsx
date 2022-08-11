import { useActions } from "@/redux/hooks";
import Button from "@/ui/Actions/Button";
import Divider from "@/ui/Layout/Divider";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProvidersSection } from ".";

const loginFormSchema = [
  {
    name: "username",
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

type FormValues = {
  username: string;
  password: string;
};

const LoginLayout = ({ closeModal }) => {
  const [loading, setLoading] = useState(false);

  // Actions
  const { createAlert } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const response = await signIn("credentials", {
      redirect: false,
      password: data.password,
      username: data.username,
    });

    setLoading(false);

    if (response?.status === 200) {
      closeModal();

      createAlert({
        message: "Bienvenido!",
        type: "success",
      });
    }

    if (response?.error) {
      setError("username", { type: "custom", message: "Ingresa tú usuario" });
      setError("password", { type: "custom", message: "Ingresa tú password" });

      createAlert({
        message: "Something went wrong! 😩",
        type: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loginFormSchema.map((item, i) => (
        <div key={i}>
          <label className="flex mb-1">
            <span className="text-sm ">
              {item.label}{" "}
              <span className="ml-0.5 text-primary">
                {item.required ? "*" : "(Opcional)"}
              </span>
            </span>
          </label>
          <div
            className={`flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ${
              errors[item.name] && "border-error"
            }`}
          >
            {item.icon}
            <input
              {...register(item.name)}
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
        className="w-full mt-4"
        loading={loading}
      >
        Login
      </Button>
      <Divider />
      <ProvidersSection />
      <div className="flex justify-between mt-4">
        <span className="text-sm ml-2 hover:text-primary cursor-pointer hover:-translate-y-1 duration-500 transition-all">
          Olvidaste tú cuenta?
        </span>
      </div>
    </form>
  );
};

export default LoginLayout;

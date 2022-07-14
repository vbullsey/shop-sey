import Button from "@/ui/Actions/Button";
import { FaGoogle, FaTwitch, FaSteamSquare, FaReddit } from "react-icons/fa";
import { signIn } from "next-auth/react";

const providers = [
  {
    name: "reddit",
    icon: <FaReddit className="fill-white hover:fill-primary text-lg" />,
    disabled: false,
  },
  {
    name: "google",
    icon: <FaGoogle className="fill-white hover:fill-primary text-lg" />,
    disabled: false,
  },
  {
    name: "twitch",
    icon: <FaTwitch className="fill-white hover:fill-primary text-lg" />,
    disabled: true,
  },
  {
    name: "steam",
    icon: <FaSteamSquare className="fill-white hover:fill-primary text-lg" />,
    disabled: true,
  },
];

export const ProvidersSection = () => {
  return (
    <div className="flex flex-wrap justify-between mt-4">
      {providers.map((provider, i) => (
        <Button
          key={i}
          className="px-8 md:px-10"
          startIcon={provider.icon}
          onClick={() => signIn(provider.name)}
          disabled={provider.disabled}
        />
      ))}
    </div>
  );
};

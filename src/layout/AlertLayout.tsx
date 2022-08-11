import { useTypedSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

import toast, { Toaster } from "react-hot-toast";

import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { classNames } from "@/utils/utilsFuntions";
import { useEffect } from "react";

export const notify = (alert) => {
  toast.custom((t) => {
    return (
      <div
        className={classNames(
          "notificationWrapper",
          t.visible ? "top-0" : "-top-96"
        )}
      >
        <div className="iconWrapper">
          <HiLightningBolt />
        </div>
        <div className="contentWrapper">
          <h1>{alert?.message}</h1>
          <p>
            An improved version of VESSEL is now available, refresh to update.
          </p>
        </div>
        <div className="closeIcon" onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    );
  });
};

const AlertLayout = () => {
  const { alerts } = useTypedSelector((state: RootState) => state.alert);

  return <Toaster />;
};

export default AlertLayout;

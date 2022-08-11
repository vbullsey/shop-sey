import React from "react";
import { twMerge } from "tailwind-merge";

import type { IComponentBaseProps } from "@/types";

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement> &
  IComponentBaseProps;

const DropdownMenu = ({
  dataTheme,
  className,
  ...props
}: DropdownMenuProps) => {
  const classes = twMerge(
    "dropdown-content menu shadow bg-base-100 rounded-box",
    className
  );

  return (
    <ul {...props} tabIndex={0} data-theme={dataTheme} className={classes} />
  );
};

export default DropdownMenu;

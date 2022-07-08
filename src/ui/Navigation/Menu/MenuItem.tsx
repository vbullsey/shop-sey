import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '@/types';

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> &
  IComponentBaseProps & {
    disabled?: boolean;
  };

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ className, disabled, ...props }, ref) => {
    const classes = twMerge(
      className,
      clsx({
        disabled,
      })
    );

    return <li role="menuitem" className={classes} {...props} ref={ref} />;
  }
);

export default MenuItem;

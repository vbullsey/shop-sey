import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentSize, IComponentBaseProps } from '@/types';

export type KbdProps = React.HTMLAttributes<HTMLElement> &
  IComponentBaseProps & {
    size?: ComponentSize;
  };

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ children, size, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'kbd',
      className,
      clsx({
        [`kbd-${size}`]: size,
      })
    );

    return (
      <kbd {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </kbd>
    );
  }
);

export default Kbd;

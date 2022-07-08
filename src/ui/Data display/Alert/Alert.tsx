import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentStatus, IComponentBaseProps } from '@/types';

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    icon?: ReactNode;
    status?: ComponentStatus;
  };

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { children, icon, status, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'alert',
      className,
      clsx({
        [`alert-${status}`]: status,
      })
    );

    return (
      <div
        role="alert"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        <div className="flex-1">
          {icon}
          <label>{children}</label>
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;

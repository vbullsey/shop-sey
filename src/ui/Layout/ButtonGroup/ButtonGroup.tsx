import clsx from 'clsx';
import type { ReactElement } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '@/types';
import type { ButtonProps } from '@/ui/Actions/Button';

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    vertical?: boolean;
    children: ReactElement<ButtonProps>[];
  };

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    { vertical, children, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'btn-group',
      className,
      clsx({
        'btn-group-vertical': vertical,
      })
    );

    return (
      <div
        aria-label={`Group of ${children.length} buttons`}
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default ButtonGroup;

import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '@/types';

import CollapseContent from './CollapseContent';
import CollapseTitle from './CollapseTitle';

export type CollapseProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    checkbox?: boolean;
    icon?: 'arrow' | 'plus';
    open?: boolean;
  };

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  (
    { children, checkbox, icon, open, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'collapse',
      className,
      clsx({
        [`collapse-${icon}`]: icon,
        'collapse-open': open === true,
        'collapse-close': open === false,
      })
    );

    return (
      <div
        aria-expanded={open}
        {...props}
        ref={ref}
        tabIndex={0}
        data-theme={dataTheme}
        className={classes}
      >
        {checkbox && <input type="checkbox" className="peer" />}
        {children}
      </div>
    );
  }
);

export default Object.assign(Collapse, {
  Title: CollapseTitle,
  Content: CollapseContent,
});

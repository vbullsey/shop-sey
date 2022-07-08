import clsx from 'clsx';
import type { ReactElement } from 'react';
import React, { cloneElement, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentSize, IComponentBaseProps } from '@/types';

import type { TabProps } from './Tab';
import Tab from './Tab';

export type TabsProps<T> = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    children: ReactElement<TabProps<T>>[];
    value?: T;
    onChange?: (value: T) => void;
    variant?: 'bordered' | 'lifted';
    size?: ComponentSize;
    boxed?: boolean;
  };

const TabsInner = <T extends string | number | undefined>(
  props: TabsProps<T>,
  ref?: React.ForwardedRef<T>
): JSX.Element => {
  const {
    children,
    value,
    onChange,
    variant,
    size,
    boxed,
    dataTheme,
    className,
    ...rest
  } = props;
  const [activeValue, setActiveValue] = useState<T | undefined>(value);

  const classes = twMerge(
    'tabs',
    className,
    clsx({
      'tabs-boxed': boxed,
    })
  );

  return (
    <div role="tablist" {...rest} data-theme={dataTheme} className={classes}>
      {children.map((child) => {
        return cloneElement(child, {
          variant,
          size,
          activeValue,
          onClick: (value: T) => {
            setActiveValue(value);
            onChange && onChange(value);
          },
        });
      })}
    </div>
  );
};

// Make forwardRef work with generic component
const Tabs = React.forwardRef(TabsInner) as <T>(
  props: TabsProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof TabsInner>;

export default Object.assign(Tabs, { Tab });

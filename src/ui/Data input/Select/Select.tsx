import clsx from 'clsx';
import type { ReactElement } from 'react';
import React, { cloneElement, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import type {
  ComponentColor,
  ComponentSize,
  IComponentBaseProps,
} from '@/types';

import type { SelectOptionProps } from './SelectOption';
import SelectOption from './SelectOption';

export type SelectOption<T> = {
  value: T;
  label: string;
};

export type SelectProps<T> = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'onChange' | 'value' | 'size' | 'color'
> &
  IComponentBaseProps & {
    children: ReactElement<SelectOptionProps<T>>[];
    initialValue?: T;
    value?: T;
    onChange?: (value: T) => void;
    size?: ComponentSize;
    color?: ComponentColor;
    bordered?: boolean;
    borderOffset?: boolean;
  };

const SelectInner = <T extends string | number | undefined>(
  props: SelectProps<T>,
  ref: React.ForwardedRef<HTMLSelectElement>
): JSX.Element => {
  const {
    children,
    initialValue,
    value,
    onChange,
    size,
    color,
    bordered = true,
    borderOffset,
    dataTheme,
    className,
    ...rest
  } = props;

  const classes = twMerge(
    'select',
    className,
    clsx({
      [`select-${size}`]: size,
      [`select-${color}`]: color,
      [`focus:outline-offset-0`]: !borderOffset,
      'select-bordered': bordered,
    })
  );

  const [selectedValue, setSelectedValue] = useState<T | undefined>(
    value || initialValue
  );

  return (
    <select
      {...rest}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
      onChange={(e) => {
        setSelectedValue(e.currentTarget.value as T);
        onChange && onChange(e.currentTarget.value as T);
      }}
    >
      {children.map((child) => {
        return cloneElement(child, {
          selectedValue,
        });
      })}
    </select>
  );
};

// Make forwardRef work with generic component
const Select = React.forwardRef(SelectInner) as <T>(
  props: SelectProps<T> & { ref?: React.ForwardedRef<HTMLSelectElement> }
) => ReturnType<typeof SelectInner>;

export default Object.assign(Select, { Option: SelectOption });

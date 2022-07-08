import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentSize, IComponentBaseProps } from '@/types';

import type { MenuItemProps as ItemProps } from './MenuItem';
import MenuItem from './MenuItem';
import type { MenuTitleProps as TitleProps } from './MenuTitle';
import MenuTitle from './MenuTitle';

export type MenuTitleProps = TitleProps;
export type MenuItemProps = ItemProps;

export type MenuProps = React.HTMLAttributes<HTMLUListElement> &
  IComponentBaseProps & {
    normal?: ComponentSize | boolean; // Applies default paddings
    compact?: ComponentSize | boolean; // Applies smaller padding
    vertical?: ComponentSize | boolean; // Vertical menu (default)
    horizontal?: ComponentSize | boolean; // Horizontal menu
  };

interface ModifierMap {
  [key: string]: {
    [key: string]: string | undefined;
  };
}

const DYNAMIC_MODIFIERS: ModifierMap = {
  compact: {
    true: 'menu-compact',
    xs: 'xs:menu-compact',
    sm: 'sm:menu-compact',
    md: 'md:menu-compact',
    lg: 'lg:menu-compact',
  },
  normal: {
    true: 'menu-normal',
    xs: 'xs:menu-normal',
    sm: 'sm:menu-normal',
    md: 'md:menu-normal',
    lg: 'lg:menu-normal',
  },
  horizontal: {
    true: 'menu-horizontal',
    xs: 'xs:menu-horizontal',
    sm: 'sm:menu-horizontal',
    md: 'md:menu-horizontal',
    lg: 'lg:menu-horizontal',
  },
  vertical: {
    true: 'menu-vertical',
    xs: 'xs:menu-vertical',
    sm: 'sm:menu-vertical',
    md: 'md:menu-vertical',
    lg: 'lg:menu-vertical',
  },
};

const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  (
    { normal, compact, horizontal, vertical, dataTheme, className, ...props },
    ref
  ) => {
    const classes = twMerge(
      'menu',
      className,
      clsx({
        [(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || '']:
          compact,
        [(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || '']: normal,
        [(horizontal && DYNAMIC_MODIFIERS.horizontal[horizontal.toString()]) ||
        '']: horizontal,
        [(vertical && DYNAMIC_MODIFIERS.vertical[vertical.toString()]) || '']:
          vertical,
      })
    );

    return (
      <ul
        role="menu"
        data-theme={dataTheme}
        className={classes}
        {...props}
        ref={ref}
      />
    );
  }
);

export default Object.assign(Menu, { Title: MenuTitle, Item: MenuItem });

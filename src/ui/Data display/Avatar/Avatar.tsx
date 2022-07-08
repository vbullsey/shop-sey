import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type {
  ComponentColor,
  ComponentShape,
  ComponentSize,
  IComponentBaseProps,
} from '@/types';

import AvatarGroup from './AvatarGroup';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    src?: string;
    letters?: string;
    size?: ComponentSize;
    shape?: ComponentShape;
    color?: ComponentColor;
    border?: boolean;
    borderColor?: ComponentColor;
    online?: boolean;
    offline?: boolean;
  };

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      letters,
      size,
      shape,
      color,
      border,
      borderColor,
      online,
      offline,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const containerClasses = twMerge(
      'avatar',
      className,
      clsx({
        online,
        offline,
        placeholder: !src,
      })
    );

    const imgClasses = clsx({
      'ring ring-offset-2 ring-offset-base-100': border,
      [`ring-${borderColor}`]: borderColor,
      'rounded-btn': shape === 'square',
      'rounded-full': shape === 'circle',
      'h-32 w-32': size === 'lg',
      'h-24 w-24': !size || size === 'md',
      'h-14 w-14': size === 'sm',
      'h-10 w-10': size === 'xs',
    });

    const placeholderClasses = clsx({
      'bg-neutral-focus': !color,
      'text-neutral-content': !color,
      [`bg-${color}`]: color,
      [`text-${color}-content`]: color,
      'ring ring-offset-2 ring-offset-base-100': border,
      [`ring-${borderColor}`]: borderColor,
      'rounded-btn': shape === 'square',
      'rounded-full': shape === 'circle',
      'h-32 w-32 text-3xl': size === 'lg',
      'h-24 w-24 text-xl': !size || size === 'md',
      'h-14 w-14': size === 'sm',
      'h-10 w-10': size === 'xs',
    });

    return (
      <div
        aria-label="Avatar photo"
        {...props}
        data-theme={dataTheme}
        className={containerClasses}
        ref={ref}
      >
        {src ? (
          <div className={imgClasses}>
            <img src={src} />
          </div>
        ) : (
          <div className={placeholderClasses}>
            <span>{letters}</span>
          </div>
        )}
      </div>
    );
  }
);

export default Object.assign(Avatar, {
  Group: AvatarGroup,
});

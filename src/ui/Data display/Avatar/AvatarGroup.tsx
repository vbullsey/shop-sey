import clsx from 'clsx';
import type { ReactElement } from 'react';
import React from 'react';

import type { AvatarProps } from '.';

type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactElement<AvatarProps>[];
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const classes = clsx('avatar-group', '-space-x-6', className);

    return (
      <div
        aria-label={`Group of ${children.length} avatar photos`}
        {...props}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default AvatarGroup;

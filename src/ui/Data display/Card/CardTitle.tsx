import type { ElementType } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '@/types';

export type CardTitleProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    tag?: ElementType;
  };

const CardTitle = React.forwardRef<HTMLElement, CardTitleProps>(
  ({ className, tag = 'div', ...props }, ref) => {
    const Tag = tag;

    return (
      <Tag {...props} className={twMerge('card-title', className)} ref={ref} />
    );
  }
);

export default CardTitle;

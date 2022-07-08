import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '@/types';

import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableHead from './TableHead';
import TableRow from './TableRow';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> &
  IComponentBaseProps & {
    compact?: boolean;
    zebra?: boolean;
  };

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    { children, compact, zebra, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'table',
      className,
      clsx({
        'table-zebra': zebra,
        'table-compact': compact,
      })
    );

    return (
      <table {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </table>
    );
  }
);

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Footer: TableFooter,
});

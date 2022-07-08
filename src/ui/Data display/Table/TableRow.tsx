import clsx from 'clsx';
import type { ReactElement } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '@/types';

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement> &
  IComponentBaseProps & {
    children?: ReactElement[];
    active?: boolean;
    hover?: boolean;
  };

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, active, hover, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        active,
        hover,
      })
    );

    return (
      <tr {...props} className={classes} ref={ref}>
        {children?.map((child, i) =>
          i < 1 ? <th>{child}</th> : <td>{child}</td>
        )}
      </tr>
    );
  }
);

export default TableRow;

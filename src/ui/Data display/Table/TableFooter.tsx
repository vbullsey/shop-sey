import type { ReactElement } from 'react';
import React, { useId } from 'react';

import type { IComponentBaseProps } from '@/types';

export type TableFooterProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> &
    IComponentBaseProps & {
      children?: ReactElement[];
    };

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, ...props }, ref): JSX.Element => {
    const id = useId();

    return (
      <tfoot {...props} ref={ref}>
        <tr>
          {children?.map((child) => {
            return <th key={id}>{child}</th>;
          })}
        </tr>
      </tfoot>
    );
  }
);

export default TableFooter;

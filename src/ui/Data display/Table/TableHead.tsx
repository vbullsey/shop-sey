import type { ReactNode } from 'react';
import React, { useId } from 'react';

export type TableHeadProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> & {
    children?: ReactNode[];
  };

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, ...props }, ref): JSX.Element => {
    const id = useId();

    return (
      <thead {...props} ref={ref}>
        <tr>
          {children?.map((child) => {
            return <th key={id}>{child}</th>;
          })}
        </tr>
      </thead>
    );
  }
);
export default TableHead;

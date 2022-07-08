import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from '@/ui/Actions/Button';

import type { PaginationProps } from '.';
import Pagination from '.';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
} as Meta;

export const Default: Story<PaginationProps> = (args) => {
  return (
    <Pagination {...args}>
      <Button>1</Button>
      <Button active>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </Pagination>
  );
};

Default.args = {};

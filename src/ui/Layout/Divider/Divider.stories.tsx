import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { DividerProps } from '.';
import Divider from '.';

export default {
  title: 'Layout/Divider',
  component: Divider,
} as Meta;

export const Default: Story<DividerProps> = (args) => {
  return (
    <div className="flex w-full flex-col">
      <div className="card rounded-box grid h-20 place-items-center bg-base-300">
        content
      </div>
      <Divider {...args}>{args.children}</Divider>
      <div className="card rounded-box grid h-20 place-items-center bg-base-300">
        content
      </div>
    </div>
  );
};
Default.args = {};

export const Vertical: Story<DividerProps> = (args) => {
  return (
    <div className="flex w-full flex-row">
      <div className="card rounded-box grid h-32 grow place-items-center bg-base-300">
        content
      </div>
      <Divider {...args}>{args.children}</Divider>
      <div className="card rounded-box grid h-32 grow place-items-center bg-base-300">
        content
      </div>
    </div>
  );
};
Vertical.args = {
  vertical: true,
};

import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Avatar from '@/ui/Data display/Avatar';
import Badge from '@/ui/Data display/Badge';

import type { IndicatorProps } from '.';
import Indicator from '.';

export default {
  title: 'Layout/Indicator',
  component: Indicator,
  argTypes: {
    innerRef: {
      control: false,
    },
    children: {
      control: false,
    },
    item: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<IndicatorProps> = (args) => {
  return <Indicator {...args} />;
};

Default.args = {
  children: (
    <Avatar src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
  ),
  item: <Badge color="error" />,
};

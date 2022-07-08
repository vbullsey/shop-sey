import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from '@/ui/Actions/Button';

import type { ButtonGroupProps } from '.';
import ButtonGroup from '.';

export default {
  title: 'Layout/ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button active>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = { vertical: true };

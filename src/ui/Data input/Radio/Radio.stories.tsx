import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Form from '@/ui/Layout/Form';

import type { RadioProps } from '.';
import Radio from '.';

export default {
  title: 'Data Input/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => {
  return (
    <Form>
      <Radio {...args} name="radio1" />
      <Radio {...args} name="radio1" defaultChecked />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = { color: 'primary' };

export const SecondaryColor = Template.bind({});
SecondaryColor.args = { color: 'secondary' };

export const AccentColor = Template.bind({});
AccentColor.args = { color: 'accent' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const WithLabelsAndForm: Story<RadioProps> = (args) => {
  return (
    <div className="w-1/4 rounded-lg bg-base-200 p-4 shadow">
      <Form>
        <Form.Label title="Red Pill">
          <Radio
            {...args}
            name="radio1"
            className="checked:bg-red-500"
            defaultChecked
          />
        </Form.Label>
      </Form>
      <Form>
        <Form.Label title="Blue Pill">
          <Radio
            {...args}
            name="radio1"
            className="checked:bg-blue-500"
            defaultChecked
          />
        </Form.Label>
      </Form>
    </div>
  );
};

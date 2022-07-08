import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Form from '@/ui/Layout/Form';

import type { ToggleProps } from '.';
import Toggle from '.';

export default {
  title: 'Data Input/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => {
  return <Toggle {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

const FormTemplate: Story<ToggleProps> = (args) => {
  return (
    <Form className="rounded-lg bg-base-200 p-4 shadow">
      <Form.Label title="Remember me">
        <Toggle {...args} className="m-2" />
      </Form.Label>
    </Form>
  );
};

export const WithLabelAndForm = FormTemplate.bind({});
WithLabelAndForm.args = {};

export const PrimaryColor = FormTemplate.bind({});
PrimaryColor.args = { color: 'primary' };

export const SecondaryColor = FormTemplate.bind({});
SecondaryColor.args = { color: 'secondary' };

export const AccentColor = FormTemplate.bind({});
AccentColor.args = { color: 'accent' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const DisabledAndChecked = Template.bind({});
DisabledAndChecked.args = { disabled: true, checked: true };

export const Sizes: Story<ToggleProps> = (args) => {
  return (
    <div className="float-left flex flex-col items-center gap-2">
      <Toggle {...args} defaultChecked size="xs" />
      <Toggle {...args} defaultChecked size="sm" />
      <Toggle {...args} defaultChecked size="md" />
      <Toggle {...args} defaultChecked size="lg" />
    </div>
  );
};

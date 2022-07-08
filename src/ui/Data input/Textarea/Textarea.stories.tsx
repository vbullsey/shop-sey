import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { TextareaProps } from '.';
import Textarea from '.';

export default {
  title: 'Data input/TextArea',
  component: Textarea,
  args: {
    placeHolder: 'Bio',
    disabled: false,
  },
} as Meta;

export const Default: Story<TextareaProps> = (args) => {
  return (
    <div className="component-preview flex w-full items-center justify-center gap-2 p-4 font-sans">
      <Textarea {...args} />
    </div>
  );
};

export const FormControlAndLabels: Story<TextareaProps> = (args) => {
  return (
    <div className="component-preview flex w-full items-center justify-center gap-2 p-4 font-sans">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <Textarea {...args} />
        <label className="label">
          <span className="label-text-alt">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
    </div>
  );
};

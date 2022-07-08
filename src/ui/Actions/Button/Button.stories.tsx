import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {};


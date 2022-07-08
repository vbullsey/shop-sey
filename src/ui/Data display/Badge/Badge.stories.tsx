import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from '@/ui/Actions/Button';

import type { BadgeProps } from '.';
import Badge from '.';

export default {
  title: 'Data Display/Badge',
  component: Badge,
} as Meta;

export const Default: Story<BadgeProps> = (args) => {
  return <Badge {...args}>Example</Badge>;
};
Default.args = {};

export const Colors: Story<BadgeProps> = (args) => {
  return (
    <div>
      <div>
        <Badge {...args}>neutral</Badge>
        <Badge {...args} color="primary">
          primary
        </Badge>
        <Badge {...args} color="secondary">
          secondary
        </Badge>
        <Badge {...args} color="accent">
          accent
        </Badge>
        <Badge {...args} color="ghost">
          ghost
        </Badge>
      </div>
      <div>
        <Badge {...args} color="success">
          success
        </Badge>
        <Badge {...args} color="info">
          info
        </Badge>
        <Badge {...args} color="warning">
          warning
        </Badge>
        <Badge {...args} color="error">
          error
        </Badge>
      </div>
    </div>
  );
};
Colors.args = {
  className: 'm-1',
};

export const Outline: Story<BadgeProps> = (args) => {
  return (
    <div>
      <Badge {...args} variant="outline">
        neutral
      </Badge>
      <Badge {...args} color="primary" variant="outline">
        primary
      </Badge>
      <Badge {...args} color="secondary" variant="outline">
        secondary
      </Badge>
      <Badge {...args} color="accent" variant="outline">
        accent
      </Badge>
    </div>
  );
};
Outline.args = {
  className: 'm-1',
};

export const Sizes: Story<BadgeProps> = (args) => {
  return (
    <div>
      <Badge {...args} size="lg">
        987,654
      </Badge>
      <Badge {...args} size="md">
        987,654
      </Badge>
      <Badge {...args} size="sm">
        987,654
      </Badge>
      <Badge {...args} size="xs">
        987,654
      </Badge>
    </div>
  );
};
Sizes.args = {
  className: 'm-1',
};

export const Empty: Story<BadgeProps> = (args) => {
  return (
    <div className="flex items-center gap-2">
      <Badge {...args} size="lg" />
      <Badge {...args} size="md" />
      <Badge {...args} size="sm" />
      <Badge {...args} size="xs" />
    </div>
  );
};
Empty.args = {};

export const BadgeInText: Story<BadgeProps> = (args) => {
  return (
    <div className="flex items-center gap-2">
      <h2 className="gap-2 text-xl">
        Heading{' '}
        <Badge {...args} size="lg">
          NEW
        </Badge>
      </h2>
    </div>
  );
};
BadgeInText.args = {};

export const BadgeInAButton: Story<BadgeProps> = (args) => {
  return (
    <div className="flex items-center gap-2">
      <Button className="gap-2">
        Inbox
        <Badge {...args}>+99</Badge>
      </Button>
      <Button className="gap-2">
        Inbox
        <Badge {...args} color="primary">
          +99
        </Badge>
      </Button>
    </div>
  );
};
BadgeInAButton.args = {};

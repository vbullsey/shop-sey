import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Card from '@/ui/Data display/Card';

import type { StackProps } from '.';
import Stack from '.';

export default {
  title: 'Layout/Stack',
  component: Stack,
} as Meta;

export const Default: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <div className="grid h-20 w-32 place-content-center rounded bg-primary text-primary-content">
        1
      </div>
      <div className="grid h-20 w-32 place-content-center rounded bg-accent text-accent-content">
        2
      </div>
      <div className="grid h-20 w-32 place-content-center rounded bg-secondary text-secondary-content">
        3
      </div>
    </Stack>
  );
};

export const StackedImages: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <img
        src="https://api.lorem.space/image/face?w=100&h=100&hash=8B7BCDC2"
        alt="Image 1"
        className="rounded"
      />
      <img
        src="https://api.lorem.space/image/face?w=100&h=100&hash=500B67FB"
        alt="Image 2"
        className="rounded"
      />
      <img
        src="https://api.lorem.space/image/face?w=100&h=100&hash=A89D0DE6"
        alt="Image 3"
        className="rounded"
      />
    </Stack>
  );
};

export const StackedCardsWithBorder: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <Card className="w-36 border border-base-content bg-base-100 text-center">
        <Card.Body>A</Card.Body>
      </Card>
      <Card className="w-36 border border-base-content bg-base-100 text-center">
        <Card.Body>B</Card.Body>
      </Card>
      <Card className="w-36 border border-base-content bg-base-100 text-center">
        <Card.Body>C</Card.Body>
      </Card>
    </Stack>
  );
};

export const StackedCardsWithShadow: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <Card className="w-36 bg-base-200 text-center shadow-md">
        <Card.Body>A</Card.Body>
      </Card>
      <Card className="w-36 bg-base-200 text-center shadow-md">
        <Card.Body>B</Card.Body>
      </Card>
      <Card className="w-36 bg-base-200 text-center shadow-md">
        <Card.Body>C</Card.Body>
      </Card>
    </Stack>
  );
};

export const StackedCards: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <Card className="bg-primary text-center text-primary-content shadow-md">
        <Card.Body>
          <Card.Title>Notification 1</Card.Title>
          <p>You have 3 unread messages. Tap here to see.</p>
        </Card.Body>
      </Card>
      <Card className="bg-primary text-center text-primary-content shadow-md">
        <Card.Body>
          <Card.Title>Notification 2</Card.Title>
          <p>You have 3 unread messages. Tap here to see.</p>
        </Card.Body>
      </Card>
      <Card className="bg-primary text-center text-primary-content shadow-md">
        <Card.Body>
          <Card.Title>Notification 3</Card.Title>
          <p>You have 3 unread messages. Tap here to see.</p>
        </Card.Body>
      </Card>
    </Stack>
  );
};

Default.args = {};

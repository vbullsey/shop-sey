import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from '@/ui/Actions/Button';
import Avatar from '@/ui/Data display/Avatar';

import type { StatsProps } from '.';
import Stats from '.';
import Stat from './Stat';

export default {
  title: 'Data Display/Stats',
  component: Stats,
} as Meta;

export const Default: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="bg-base-200 shadow">
      <Stats.Stat>
        <Stat.Item variant="title">Total Page Views</Stat.Item>
        <Stat.Item variant="value">89,400</Stat.Item>
        <Stat.Item variant="desc">21% more than last month</Stat.Item>
      </Stats.Stat>
    </Stats>
  );
};

export const IconsOrImage: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="font-sans shadow">
      <Stats.Stat>
        <Stat.Item variant="figure" className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </Stat.Item>
        <Stat.Item variant="title">Total Likes</Stat.Item>
        <Stat.Item variant="value" className="text-primary">
          25.6K
        </Stat.Item>
        <Stat.Item variant="desc">21% more than last month</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="figure" className="text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </Stat.Item>
        <Stat.Item variant="title">Page Views</Stat.Item>
        <Stat.Item variant="value" className="text-secondary">
          2.6M
        </Stat.Item>
        <Stat.Item variant="desc">21% more than last month</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="figure" className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </Stat.Item>
        <Stat.Item variant="figure" className=" text-secondary">
          <Avatar
            size="sm"
            online={true}
            src="https://api.lorem.space/image/face?w=128&h=128"
            shape="circle"
          ></Avatar>
        </Stat.Item>
        <Stat.Item variant="value">86%</Stat.Item>
        <Stat.Item variant="title">Tasks done</Stat.Item>
        <Stat.Item variant="desc" className="text-secondary">
          31 tasks remaining
        </Stat.Item>
      </Stats.Stat>
    </Stats>
  );
};

export const CenteredItems: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="font-sans shadow">
      <Stats.Stat className="place-items-center">
        <Stat.Item variant="title">Downloads</Stat.Item>
        <Stat.Item variant="value">31K</Stat.Item>
        <Stat.Item variant="desc">From January 1st to February 1st</Stat.Item>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stat.Item variant="title">Users</Stat.Item>
        <Stat.Item variant="value" className="text-secondary">
          4,200
        </Stat.Item>
        <Stat.Item variant="desc" className="text-secondary">
          ↗︎ 40 (2%)
        </Stat.Item>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stat.Item variant="title">New Registers</Stat.Item>
        <Stat.Item variant="value">1,200</Stat.Item>
        <Stat.Item variant="desc">↘︎ 90 (14%)</Stat.Item>
      </Stats.Stat>
    </Stats>
  );
};

export const Vertical: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="font-sans shadow">
      <Stats.Stat>
        <Stat.Item variant="title">Downloads</Stat.Item>
        <Stat.Item variant="value">31K</Stat.Item>
        <Stat.Item variant="desc">Jan 1st - Feb 1st</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="title">New Users</Stat.Item>
        <Stat.Item variant="value">4,200</Stat.Item>
        <Stat.Item variant="desc">↗︎ 400 (22%)</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="title">New Registers</Stat.Item>
        <Stat.Item variant="value">1,200</Stat.Item>
        <Stat.Item variant="desc">↘︎ 90 (14%)</Stat.Item>
      </Stats.Stat>
    </Stats>
  );
};
Vertical.args = {
  vertical: true,
};

export const Responsive: Story<StatsProps> = (args) => {
  return (
    <Stats className="stats-vertical shadow lg:stats-horizontal">
      <Stats.Stat>
        <Stat.Item variant="title">Downloads</Stat.Item>
        <Stat.Item variant="value">31K</Stat.Item>
        <Stat.Item variant="desc">Jan 1st - Feb 1st</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="title">New Users</Stat.Item>
        <Stat.Item variant="value">4,200</Stat.Item>
        <Stat.Item variant="desc">↗︎ 400 (22%)</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="title">New Registers</Stat.Item>
        <Stat.Item variant="value">1,200</Stat.Item>
        <Stat.Item variant="desc">↘︎ 90 (14%)</Stat.Item>
      </Stats.Stat>
    </Stats>
  );
};

export const CustomColorsAndButton: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="bg-primary font-sans text-primary-content">
      <Stats.Stat>
        <Stat.Item variant="title">Account balance</Stat.Item>
        <Stat.Item variant="value">$89,400</Stat.Item>
        <div className="stat-actions">
          <Button size="sm" color="success">
            Add funds
          </Button>
        </div>
      </Stats.Stat>
      <Stats.Stat>
        <Stat.Item variant="title">Current balance</Stat.Item>
        <Stat.Item variant="value">$89,400</Stat.Item>
        <div className="stat-actions flex gap-1">
          <Button size="sm">Withdrawal</Button>
          <Button size="sm">deposit</Button>
        </div>
      </Stats.Stat>
    </Stats>
  );
};

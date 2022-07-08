import type { Meta, Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import type { CountdownProps } from '.';
import Countdown from '.';

export default {
  title: 'Data Display/Countdown',
  component: Countdown,
} as Meta;

export const Default: Story<CountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return <Countdown className="text-2xl" value={value} />;
};
Default.args = {
  value: 50,
};

export const Clock: Story<CountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <span className="font-mono text-2xl">
      <Countdown value={10} />:
      <Countdown value={24} />:
      <Countdown value={value} />
    </span>
  );
};
Clock.args = {
  value: 34,
};

export const WithLabels: Story<CountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={15} />
        days
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={10} />
        hours
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={24} />
        min
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={value} />
        sec
      </div>
    </div>
  );
};
WithLabels.args = {
  value: 37,
};

export const WithBoxes: Story<CountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? args.value : v - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <Countdown className="font-mono text-5xl" value={15} />
        days
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <Countdown className="font-mono text-5xl" value={10} />
        hours
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <Countdown className="font-mono text-5xl" value={24} />
        min
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <Countdown className="font-mono text-5xl" value={value} />
        sec
      </div>
    </div>
  );
};
WithBoxes.args = {
  value: 26,
};

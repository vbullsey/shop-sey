import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { RatingProps } from '.';
import Rating from '.';

export default {
  title: `Data Input/Rating`,
  component: Rating,
} as Meta;

export const Default: Story<RatingProps> = (args) => {
  return (
    <Rating {...args}>
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" checked />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
    </Rating>
  );
};

export const MaskStart2WithWarningColor: Story<RatingProps> = (args) => {
  return (
    <Rating {...args}>
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </Rating>
  );
};

export const MaskHeartWithMultipleColors: Story<RatingProps> = (args) => {
  return (
    <Rating {...args}>
      <Rating.Item name="rating-3" className="mask mask-heart bg-red-400" />
      <Rating.Item
        name="rating-3"
        className="mask mask-heart bg-orange-400"
        checked
      />
      <Rating.Item name="rating-3" className="mask mask-heart bg-yellow-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-lime-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-green-400" />
    </Rating>
  );
};

export const MaskStart2WithGreen500Color: Story<RatingProps> = (args) => {
  return (
    <Rating {...args}>
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
        checked
      />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
    </Rating>
  );
};

export const RatingHidden: Story<RatingProps> = (args) => {
  return (
    <Rating {...args}>
      <Rating.Item name="rating-9" className="rating-hidden" />
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" checked />
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
    </Rating>
  );
};
RatingHidden.args = {
  size: 'lg',
};

export const HalfStars: Story<RatingProps> = (args) => {
  return (
    <Rating {...args}>
      <Rating.Item name="rating-10" className="rating-hidden" />
      <Rating.Item
        name="rating-10"
        className="mask mask-half-1 mask-star-2 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-half-2 mask-star-2 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-half-1 mask-star-2 bg-green-500"
        checked
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-half-2 mask-star-2 bg-green-500"
      />

      <Rating.Item
        name="rating-10"
        className="mask mask-half-1 mask-star-2 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-half-2 mask-star-2 bg-green-500"
      />

      <Rating.Item
        name="rating-10"
        className="mask mask-half-1 mask-star-2 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-half-2 mask-star-2 bg-green-500"
      />

      <Rating.Item
        name="rating-10"
        className="mask mask-half-1 mask-star-2 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-half-2 mask-star-2 bg-green-500"
      />
    </Rating>
  );
};
HalfStars.args = {
  size: 'lg',
  half: true,
};

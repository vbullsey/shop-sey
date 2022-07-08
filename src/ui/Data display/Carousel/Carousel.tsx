import clsx from 'clsx';
import type { ReactElement, RefObject } from 'react';
import React, {
  cloneElement,
  createRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '@/types';

import Button from '../../Actions/Button';
import type { CarouselItemProps, CarouselItemWidth } from './CarouselItem';
import CarouselItem from './CarouselItem';

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    children: ReactElement<CarouselItemProps>[];
    display?: 'slider' | 'numbered' | 'sequential';
    snap?: 'start' | 'center' | 'end';
    vertical?: boolean;
    width?: CarouselItemWidth;
    buttonStyle?: (value: string) => React.ReactElement;
  };

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      display = 'slider',
      snap,
      vertical,
      width,
      buttonStyle,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'carousel',
      className,
      clsx({
        [`carousel-${snap}`]: snap,
        'carousel-vertical': vertical,
        'w-full': display !== 'slider',
      })
    );

    const [itemRefs, setItemRefs] = useState<RefObject<HTMLDivElement>[]>([]);

    useEffect(() => {
      const newRefs: RefObject<HTMLDivElement>[] = [];
      children.map((_) => {
        newRefs.push(createRef<HTMLDivElement>());
      });
      setItemRefs(newRefs);
    }, [children]);

    const scrollToIndex = (index: number) => {
      itemRefs[index].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: snap,
      });
    };

    return (
      <>
        <div
          role="listbox"
          aria-label="Image carousel"
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
        >
          {children.map((child, i) => {
            return cloneElement(child, {
              innerRef: itemRefs[i],
              index: i + 1,
              children: child.props.children,
              src: child.props.src,
              alt: child.props.alt,
              width: display !== 'slider' ? 'full' : width,
              hasButtons: display === 'sequential',
              buttonStyle,
              onPrev: () =>
                scrollToIndex(i - 1 < 0 ? children.length - 1 : i - 1),
              onNext: () =>
                scrollToIndex(i + 1 > children.length - 1 ? 0 : i + 1),
              ...child.props,
            });
          })}
        </div>
        {display === 'numbered' && (
          <div className="flex w-full justify-center gap-2 py-2">
            {children.map((_, i) => {
              if (buttonStyle != null) {
                return cloneElement(buttonStyle((i + 1).toString()), {
                  key: i,
                  onClick: () => scrollToIndex(i),
                });
              }

              return (
                <Button key={i} onClick={() => scrollToIndex(i)}>
                  {i + 1}
                </Button>
              );
            })}
          </div>
        )}
      </>
    );
  }
);

export default Object.assign(Carousel, { Item: CarouselItem });

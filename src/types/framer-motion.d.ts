declare module 'framer-motion' {
  import * as React from 'react';

  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    style?: any;
    className?: string;
    children?: React.ReactNode;
  }

  export interface MotionProps extends AnimationProps {
    whileHover?: any;
    whileTap?: any;
    whileFocus?: any;
    whileDrag?: any;
  }

  export const motion: {
    [key in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      MotionProps & JSX.IntrinsicElements[key]
    >;
  };

  export function useScroll(options?: {
    target?: React.RefObject<HTMLElement>;
    offset?: [string | number, string | number];
  }): {
    scrollX: any;
    scrollY: any;
    scrollXProgress: any;
    scrollYProgress: any;
  };

  export function useTransform(
    value: any,
    input: number[],
    output: number[] | string[],
    options?: { clamp?: boolean }
  ): any;
} 
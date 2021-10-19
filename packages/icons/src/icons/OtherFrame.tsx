import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.308 10.885a2.192 2.192 0 10-2.193-2.193m2.193 2.193a2.192 2.192 0 01-2.193-2.193m2.193 2.193v10.23M21.115 8.692h-10.23m10.23 14.616a2.192 2.192 0 102.193-2.193m-2.193 2.193c0-1.211.982-2.193 2.193-2.193m-2.193 2.193h-10.23m0-14.616a2.193 2.193 0 01-2.193 2.193m2.193-2.193a2.192 2.192 0 10-2.193 2.193m0 0v10.23m2.193 2.193a2.192 2.192 0 11-2.193-2.193m2.193 2.193a2.193 2.193 0 00-2.193-2.193"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const OtherFrame =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default OtherFrame;

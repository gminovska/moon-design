import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.277 11.557c0 .268-.22.486-.49.486a.488.488 0 01-.492-.486c0-.268.22-.485.491-.485s.491.217.491.485zm3.928 0c0 .268-.22.486-.491.486a.488.488 0 01-.491-.486c0-.268.22-.485.49-.485.272 0 .492.217.492.485zm-1.964 0c0 .268-.22.486-.491.486a.488.488 0 01-.49-.486c0-.268.219-.485.49-.485s.49.217.49.485zM6.314 9.616c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.486.49-.486.272 0 .492.218.492.486zm1.963 0c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.486.491-.486s.491.218.491.486zm5.891 0c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.486.491-.486s.491.218.491.486zm-1.963 0c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.486.49-.486.272 0 .492.218.492.486zm-1.964 0c0 .268-.22.485-.491.485a.488.488 0 01-.49-.485c0-.268.219-.486.49-.486s.49.218.49.486zM8.277 3.79c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.485.491-.485s.491.217.491.485zM6.314 5.733c0 .267-.22.485-.491.485a.488.488 0 01-.491-.486c0-.267.22-.485.49-.485.272 0 .492.218.492.486zm0 1.941c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.485.49-.485.272 0 .492.217.492.485zm1.963-1.942c0 .268-.22.486-.49.486a.488.488 0 01-.492-.486c0-.267.22-.485.491-.485s.491.218.491.486zm0 1.942c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.485.491-.485s.491.217.491.485zm3.928-3.883c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.485.49-.485.272 0 .492.217.492.485zm.981 1.942c0-.268.22-.486.491-.486s.491.218.491.486c0 .267-.22.485-.49.485a.488.488 0 01-.492-.486zm.982 1.941c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.485.491-.485s.491.217.491.485zm-1.963-1.942c0 .268-.22.486-.491.486a.488.488 0 01-.491-.486c0-.267.22-.485.49-.485.272 0 .492.218.492.486zm0 1.942c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.485.49-.485.272 0 .492.217.492.485zM10.24 3.791c0 .268-.22.485-.491.485a.488.488 0 01-.49-.485c0-.268.219-.485.49-.485s.49.217.49.485zm0 1.942c0 .267-.22.485-.491.485a.488.488 0 01-.49-.486c0-.267.219-.485.49-.485s.49.218.49.486zm0 1.941c0 .268-.22.485-.491.485a.488.488 0 01-.49-.485c0-.268.219-.485.49-.485s.49.217.49.485zM9.75 13.62c-3.316 0-6.014-2.668-6.014-5.946 0-3.278 2.698-5.946 6.014-5.946 3.316 0 6.014 2.668 6.014 5.946 0 3.278-2.698 5.946-6.014 5.946zm0 3.526l-.723-2.838c.238.026.479.04.723.04s.485-.014.723-.04l-.723 2.838zm6.75-9.472C16.5 3.994 13.472 1 9.75 1S3 3.994 3 7.674c0 3.165 2.24 5.815 5.233 6.497l1.16 4.554A.367.367 0 009.75 19a.367.367 0 00.356-.275l1.16-4.554C14.26 13.49 16.5 10.84 16.5 7.674z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsGolf =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
  }) <
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
export default IconSportsGolf;

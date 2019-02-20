import * as React from 'react';
import styled from '@emotion/styled';
import { iconStyles } from '../config/styles';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.623 12L10 4.986 17.376 12 20 9.5 10 0 0 9.502z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const IconChevronUp = styled(Svg)(iconStyles);
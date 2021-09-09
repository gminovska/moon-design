import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.7007 14.4192C20.3649 19.7764 14.9384 23.0367 9.58001 21.7008C4.22382 20.3652 0.963159 14.9389 2.29955 9.58206C3.63469 4.22425 9.06121 0.963624 14.418 2.29925C19.7761 3.63487 23.0364 9.06175 21.7007 14.4192Z"
      fill="#F7931A"
    />
    <path
      d="M16.4098 10.5754C16.6089 9.24478 15.5957 8.52947 14.2102 8.05228L14.6596 6.24978L13.5623 5.97634L13.1248 7.73134C12.8363 7.65947 12.54 7.59166 12.2456 7.52447L12.6863 5.7579L11.5896 5.48447L11.1399 7.28634C10.9011 7.23196 10.6667 7.17822 10.4392 7.12166L10.4404 7.11603L8.92717 6.73821L8.63526 7.91009C8.63526 7.91009 9.44941 8.09665 9.43222 8.10822C9.87664 8.21915 9.95696 8.51321 9.94352 8.74634L9.43159 10.7998C9.46222 10.8076 9.50191 10.8188 9.54567 10.8363C9.5091 10.8273 9.47004 10.8173 9.42972 10.8076L8.71214 13.6842C8.65776 13.8192 8.51994 14.0217 8.20928 13.9448C8.22022 13.9607 7.41169 13.7457 7.41169 13.7457L6.86694 15.0017L8.29491 15.3576C8.56056 15.4242 8.8209 15.4938 9.07717 15.5595L8.62307 17.3826L9.71912 17.656L10.1689 15.8523C10.4683 15.9335 10.7589 16.0085 11.0433 16.0792L10.5952 17.8745L11.6925 18.1479L12.1466 16.3282C14.0177 16.6823 15.4247 16.5395 16.017 14.8473C16.4942 13.4848 15.9932 12.6988 15.0087 12.1863C15.7257 12.021 16.2658 11.5495 16.4098 10.5754ZM13.9027 14.0907C13.5636 15.4532 11.2693 14.7167 10.5255 14.532L11.128 12.1167C11.8719 12.3023 14.2571 12.6698 13.9027 14.0907ZM14.2421 10.5557C13.9327 11.7951 12.0231 11.1654 11.4037 11.011L11.95 8.82041C12.5694 8.97478 14.5643 9.2629 14.2421 10.5557Z"
      fill="white"
    />
    <circle cx={12} cy={12} r={12} fill="#15CA4F" />
    <path
      d="M12 20.4784C7.31457 20.4784 3.52161 16.6854 3.52161 12C3.52161 7.31457 7.31457 3.52161 12 3.52161C16.6854 3.52161 20.4784 7.31457 20.4784 12C20.4784 16.6854 16.673 20.4784 12 20.4784ZM14.2683 5.05863V6.32295L13.361 6.06366L12.5578 5.85193V4.73635H11.2563V5.85193L10.4788 6.06366L9.59531 6.31055V5.08342C6.73199 6.07504 4.67437 8.80201 4.67437 12C4.67437 15.198 6.73199 17.925 9.59531 18.9166V17.5531L10.4764 17.8093L11.2315 18.0117V19.2884C11.4794 19.3132 11.7397 19.3256 11.9876 19.3256C12.1859 19.3256 12.3843 19.3132 12.5826 19.3008V18.0241L13.4086 17.8093L14.2683 17.5655V18.9662C17.1936 18.0117 19.3008 15.26 19.3008 12.0124C19.3132 8.76482 17.1936 6.01306 14.2683 5.05863Z"
      fill="#0F161F"
    />
    <path
      d="M11.9234 17.0573C13.591 17.0573 15.612 16.2093 15.612 13.8492C15.612 11.913 14.2552 11.4607 12.4887 10.7824C11.4004 10.3584 11.033 10.104 11.0471 9.6235C11.0471 9.14299 11.4004 8.8462 11.9799 8.8462C12.5452 8.8462 13.167 9.11473 14.0291 9.79309L15.3576 8.06891C14.3966 7.24921 13.1953 6.74044 11.881 6.7687C10.0154 6.79697 8.58805 8.05478 8.58805 9.72243C8.58805 11.701 10.1144 12.4218 11.6407 12.9447C12.7713 13.3263 13.1246 13.5665 13.1246 14.1177C13.1246 14.5699 12.7854 14.9656 11.994 14.9656C11.3015 14.9656 10.3829 14.6123 9.61973 13.7785L8.23473 15.4603C9.30881 16.5626 10.6373 17.0573 11.9234 17.0573Z"
      fill="#0F161F"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconSoc = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
  })
);
IconSoc.defaultProps = {};
export default IconSoc;

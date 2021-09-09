import styled from 'styled-components';
import { themed } from '@heathmont/moon-utils';
import { ColorNames } from '@heathmont/moon-themes';

import getFontSize from '../private/text/getFontSize';

export type Size = 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72;

export interface TextProps {
  size?: Size;
  color?: ColorNames;
  isBold?: boolean;
  textAlign?: TextAlign;
}

const Text = styled.p<TextProps>(
  ({ color, theme }) => ({
    color: themed('color', color)(theme),
  }),
  ({ size = 16 }) => getFontSize(size),
  ({ textAlign }) =>
    textAlign && {
      textAlign,
    },
  ({ isBold, theme: { fontWeight } }) =>
    isBold && {
      fontWeight: fontWeight.semibold,
    }
);

Text.defaultProps = {
  color: 'bulma.100',
  size: 16,
};

export default Text;

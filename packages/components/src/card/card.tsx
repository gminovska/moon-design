import * as React from 'react';
import { CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import rgba from 'polished/lib/color/rgba';
import padding from 'polished/lib/shorthands/padding';
import { border, colors } from '@heathmont/sportsbet-tokens';
import {
  inlineSVG,
  InlineSVGProps,
  rem,
  spacing,
} from '@heathmont/sportsbet-utils';

import { cardGradientSizes } from './utils';

type CardTemplates = 'front' | 'outline';
type CardBackgroundIcon = InlineSVGProps | false | undefined;
type CardProps = {
  backgroundIcon?: CardBackgroundIcon | undefined;
  template: CardTemplates;
  flex?: boolean;
  active?: boolean;
};

/**
 * Styles
 */
const card: CSSObject = {
  display: 'block',
  minHeight: rem(170),
  ...padding(spacing(), spacing('medium')),
  position: 'relative',
  borderRadius: border.radius.default,
};

const cardFlex: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'alignContent',
};

const cardOutline = (color: string) => ({
  borderStyle: border.style,
  borderWidth: border.width,
  borderColor: color,
});

const cardModifiers = ({ template, backgroundIcon }: CardProps) =>
  ({
    front: [
      { backgroundColor: colors.neutral[70] },
      backgroundIcon && {
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'luminosity',
        backgroundImage: inlineSVG(backgroundIcon),
        backgroundSize: `auto 50%, ${cardGradientSizes}`,
        backgroundPosition: `center right ${spacing()}`,
      },
    ],
    outline: [
      { backgroundColor: colors.background },
      cardOutline(colors.neutral[50]),
    ],
  }[template]);

/**
 * Component
 */
const Card = styled.div<CardProps>(
  ({ active, backgroundIcon, flex, template }) => [
    card,
    active && cardOutline(colors.brand),
    flex && cardFlex,
    cardModifiers({
      template: template || 'front',
      backgroundIcon:
        backgroundIcon &&
        React.isValidElement(backgroundIcon) &&
        /* @TODO Revisit post-EPL */
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        React.cloneElement(backgroundIcon as React.ReactElement<any>, {
          color: rgba(colors.neutral[10], 0.05),
        }),
    }),
  ]
);

export { Card, CardProps };
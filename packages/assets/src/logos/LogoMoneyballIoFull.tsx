import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="100%" viewBox="0 0 191 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M0 24.4038H4.3354V16.3722C4.3354 13.4599 5.79157 11.9044 7.74415 11.9044C9.72983 11.9044 10.5903 13.526 10.5903 16.1074V24.4038H14.9257V16.3722C14.9257 13.4599 16.415 11.9044 18.2352 11.9044C20.2539 11.9044 21.0482 13.526 21.0482 16.1074V24.4038H25.3836V15.0815C25.3836 10.1173 23.1663 8.03235 19.6913 8.03235C17.3747 8.03235 15.3559 8.89281 14.0321 10.5806H13.9659C13.0062 8.82662 11.3184 8.03235 9.20032 8.03235C7.41321 8.03235 5.65919 8.82661 4.3685 10.3821H4.3354V8.26401H0V24.4038Z" fill="currentColor" /><path d="M93.3943 24.4473H97.7297V16.3391C97.7297 13.4268 99.1859 11.9044 101.37 11.9044C103.389 11.9044 104.481 12.8642 104.481 15.942V24.4473H108.816V14.8498C108.816 9.88565 106.401 8.03235 102.959 8.03235C100.94 8.03235 99.0866 8.82662 97.7959 10.349H97.7297V8.26401H93.3943V24.4473Z" fill="currentColor" /><path d="M125.923 16.2067C125.923 11.4742 122.746 8.03235 118.179 8.03235C113.38 8.03235 109.971 11.408 109.971 16.3391C109.971 21.4026 113.479 24.7451 118.443 24.7451C122.051 24.7451 124.136 23.4213 125.493 21.6673L122.679 19.0528C121.819 20.1119 120.561 20.8731 118.741 20.8731C116.557 20.8731 115.001 19.7147 114.472 17.7622H125.824C125.857 17.4974 125.923 16.7362 125.923 16.2067ZM118.145 11.8051C120.032 11.8051 121.19 12.9303 121.62 14.6513H114.505C115.002 12.798 116.391 11.8051 118.145 11.8051Z" fill="currentColor" /><path d="M128.381 31H132.782L141.486 8.26401H137.085L133.411 18.1924H133.345L129.407 8.26401H124.774L131.26 23.4544L128.381 31Z" fill="currentColor" /><path d="M151.32 24.7451C155.821 24.7451 159.097 21.4026 159.097 16.4053C159.097 11.5073 155.821 8.03235 151.452 8.03235C149.467 8.03235 147.779 8.72735 146.554 10.1173H146.521V0.0896544H142.186V24.4473H146.289V22.4947L146.356 22.4616C147.514 23.9508 149.136 24.7451 151.32 24.7451ZM150.559 20.84C148.176 20.84 146.322 19.0859 146.322 16.4384C146.322 13.8239 148.043 11.9044 150.526 11.9044C152.842 11.9044 154.695 13.6584 154.695 16.4384C154.695 19.0197 152.975 20.84 150.559 20.84Z" fill="currentColor" /><path d="M167.313 24.7451C169.431 24.7451 171.053 23.9508 172.178 22.4947L172.244 22.5278V24.4473H176.381V8.26401H172.046V10.1173L171.979 10.1504C170.821 8.76044 169.1 8.03235 167.214 8.03235C162.878 8.03235 159.602 11.5073 159.602 16.4053C159.602 21.4026 162.878 24.7451 167.313 24.7451ZM168.14 20.84C165.691 20.84 164.004 19.0197 164.004 16.4384C164.004 13.6584 165.791 11.9044 168.14 11.9044C170.457 11.9044 172.244 13.8239 172.244 16.4384C172.244 19.0859 170.358 20.84 168.14 20.84Z" fill="currentColor" /><path d="M178.715 24.4473H183.05V0H178.715V24.4473Z" fill="currentColor" /><path d="M185.778 24.4473H190.114V0H185.778V24.4473Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M82.1678 12.0067H36.5707C34.2312 12.0067 32.3347 13.9032 32.3347 16.2427C32.3347 18.5821 34.2312 20.4786 36.5706 20.4786H82.1678C84.5072 20.4786 86.4037 18.5821 86.4037 16.2427C86.4037 13.9032 84.5072 12.0067 82.1678 12.0067ZM36.5707 8.03235C32.0362 8.03235 28.3604 11.7082 28.3604 16.2427C28.3604 20.7771 32.0362 24.453 36.5706 24.453H82.1678C86.7022 24.453 90.3781 20.7771 90.3781 16.2427C90.3781 11.7082 86.7022 8.03235 82.1678 8.03235H36.5707Z" fill="#EF3124" /></svg>;
type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoMoneyballIoFull = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  theme
}) => ({
  ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize
}));
LogoMoneyballIoFull.defaultProps = {
    
  };
export default LogoMoneyballIoFull;
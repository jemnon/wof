import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    sm: '640px',
    md: '960px',
    lg: '1280px',
    xlg: '1440px',
  },
  colors: {
    cream: '#f4ede6',
    darkTeal: '#162936',
    teal: '#244c53',
    lightBrown: '#d5a188',
    nearBlack: '#111',
    nearWhite: '#F9F9F9',
    darkOrange: '#BB5B34',
    orange: '#cf7651',
    white: '#fff',
    gray: '#aaa',
    red: '#ff4136',
    green: '#19a974',
  },
  fonts: {
    lato:
      `"Lato", BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    noto:
      `"Noto Serif TC", BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
  },
  fontSizes: {
    f1: '1rem' /* 16px */,
    f2: '1.125rem' /* 18px */,
    f3: '1.25rem' /* 20px */,
    f4: '1.3125rem' /* 21px */,
    f5: '1.5rem' /* 24px */,
    f6: '1.625rem' /* 26px */,
    f7: '1.75rem' /* 28px */,
    f8: '1.875rem' /* 30px */,
    f9: '2rem' /* 32px */,
    f10: '2.25rem' /* 36px */,
    f11: '2.5rem' /* 40px */,
    f12: '2.625rem' /* 42px */,
    f13: '3rem' /* 48px */,
  },
  maxWidths: {
    sm: '480px',
    md: '960px',
    lg: '1280px',
  },
  spacing: {
    sm1: '0.25rem' /* 4px */,
    sm2: '0.5rem' /*  8px */,
    sm3: '0.75rem' /* 12px */,
    sm4: '1rem' /* 16px */,
    md1: '1.25rem' /* 20px */,
    md2: '1.5rem' /* 24px */,
    md3: '1.75rem' /* 28px */,
    md4: '2rem' /* 32px */,
    lg1: '2.25rem' /* 36px */,
    lg2: '2.5rem' /* 40px */,
    lg3: '2.75rem' /* 44px */,
    lg4: '3rem' /* 48px */,
    xlg1: '3.25rem' /* 52px */,
    xlg2: '3.5rem' /* 56px */,
    xlg3: '3.75rem' /* 60px */,
    xlg4: '4rem' /* 64px */,
  },
  transition: 'all 0.47s ease',
  zIndex: {
    z0: '0',
    z1: '1',
    z2: '2',
    z3: '3',
    z4: '4',
    z5: '5',
    z6: '6',
    z999: '999',
    z9999: '9999',
  },
};

export default theme;

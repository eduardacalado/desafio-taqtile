const customThemeStyled = () => ({
  colors: {
    primary: {
      '800': '#0A6C53',
      '700': '#01D5AD',
    },
    orange: {
      '900': '#E65200',
      '800': '#EF6D00',
      '700': '#F57D00',
    },
    dark: {
      '900': '#090A0B',
      '800': '#1C1F22',
      '700': '#2E3338',
    },
    white: '#FFFFFF',
    black: '#000000',
    border: '#E9E9E9',
    boxShadow: 'rgba(108, 65, 0, 0.05)',
    transparent: 'transparent',
  },
  fontFamily: {
    rubik: 'Rubik',
  },
  boxShadow: {
    heavy: '0px 1px 3px rgba(0, 0, 0, 0.2)',
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    sm: 390,
    md: 860,
    lg: 1280,
  },
  size: {
    base: '4px',
    m1: '10px',
    m2: '12px',
    m3: '14px',
    m4: '16px',
    m5: '18px',
    m6: '20px',
    m7: '24px',
    m8: '32px',
    m9: '40px',
    m10: '48px',
  },
});

const themeStyled = customThemeStyled();

export { customThemeStyled, themeStyled };

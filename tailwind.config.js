/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '414px',
      md: '768px',
      lg: '976px',
      xl: '1110px',
      xxl: '1280px',
      xxxl: '1440px',
    },
    colors: {
      primary: '#F57930',
      secondary: '#864B25',
      dark: { main: '#171C1A', light: '#2E3230' },
      text: '#808080',
      error: '#F93D3D',
    },
    fontSize: {
      xs: '0.875rem', // 14px
      sm: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.5rem', // 20px
      xl: '1.625rem', // 26px
      '2xl': '2.125rem', // 34px
      '3xl': '2.5rem', // 40px
      '4xl': '3rem', // 48px
      '5xl': '4rem', // 60px
    },
    fontFamily: {
      sans: ['Helvetice', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
};

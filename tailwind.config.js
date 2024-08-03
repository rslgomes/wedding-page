// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      minHeight: {
        'screen-navbar': 'calc(100vh - 4rem)',
      },
      colors: {
        primary: {
          50: '#f6f7f7',
          100: '#e1e6e4',
          200: '#c2cdc8',
          300: '#9caca6',
          400: '#768b83',
          500: '#5c7069',
          600: '#485953',
          700: '#3a4642' /*Primary*/,
          800: '#333c3a',
          900: '#2d3432',
          950: '#171c1b',
        },
        secondary: {
          50: '#f5f5f0',
          100: '#e9eadd',
          200: '#d3d6c0',
          300: '#b8bd99',
          400: '#9da378',
          500: '#777e54' /*Secondary*/,
          600: '#646b45',
          700: '#4d5338',
          800: '#404430',
          900: '#373b2c',
          950: '#1d1f14',
        },
        dark: '#171c1b',
        light: '#ffffff',
        link: '#ba6748',
        gray: {
          50: '#f1f1f1',
          100: '#e2e3e3',
          200: '#c5c7c6',
          300: '#a8abaa',
          400: '#8b8e8d',
          500: '#7d807f',
          600: '#606463',
          700: '#515554',
          800: '#343938',
          900: '#262b2a',
          950: '#171c1b',
        },
      },
    },
  },
  plugins: [],
};

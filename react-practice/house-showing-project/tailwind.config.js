// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '600px',
      md: '800px',
      lg: '1000px',
      xl: '1200px',
    },
    extend: {
      spacing: {
        '5px': '5px',
        '11px': '11px',
        '17px': '17px',
        '30px': '30px',
        '35px': '35px',
        '38px': '38px',
        '60px': '60px'
      },
      colors: {
        background: {
          DEFAULT: '#F4F4F4'
        },
        text: {
          DEFAULT: '#2D2D2D',
          opacity: '#979797'
        }
      },
      maxWidth: {
        '315px': '315px',
        '1182px': '1182px'
      },
      minHeight: {
        '280px': '280px'
      },
      fontSize: {
        '15px': '15px',
        '26px': '26px',
        '28px': '28px'
      },
      inset: {
        '14px': '14px',
        '17px': '17px'
      },
      gap: {
        '58px': '58px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

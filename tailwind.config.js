export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#2B85B2',
          500: '#1C6E9F',
          600: '#104A67',
        },
        background: '#F8F9F9',
        text: '#0C0C0C',
        neutral: {
          100: '#F8F9F9',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
        },
      },
    },
  },
  plugins: [],
};

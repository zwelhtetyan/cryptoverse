/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         screens: {
            xs: '480px',
         },
         animation: {
            'spin-fast': 'spin 1s linear infinite',
            'spin-reverse-fast': 'spin-reverse 1s linear infinite',
         },

         keyframes: {
            'spin-reverse': {
               '0%': { transform: 'rotate(360deg)' },
               '100%': { transform: 'rotate(0deg)' },
            },
         },
      },
   },
   plugins: [],
};

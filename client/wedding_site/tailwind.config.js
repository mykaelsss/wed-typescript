/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors : {
      'dark-rose' : '#581845',
      'wht' : '#FFFFFF',
      'cyan' : 'rgb(6 182 212)',
      'red' : '#D2042D',
      'offWhite' : '#FAF9F6',
      'cream' : '#FEFBEA',
      'gray' : 'rgb(209 213 219)'
    }
  },
  plugins: [],
}

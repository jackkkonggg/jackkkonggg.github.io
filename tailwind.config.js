module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#e6f1ff',
      green: '#64ffda',
      current: 'currentColor',

      'navy-light': '#233554',
      'navy-main': '#112240',
      'navy-dark': '#0a192f',

      'slate-light': '#ccd6f6',
      'slate-main': '#a8b2d1',
      'slate-dark': '#8892b0',
    },
    fontFamily: {
      sans: ['"DM Sans"', 'sans-serif'],
      mono: ['"Fira Mono"', 'monospace'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

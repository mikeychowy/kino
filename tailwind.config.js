module.exports = {
  theme: {
    extend: {},
  },
  darkMode: false,
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}',
    ],
  },
};

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '600': '600px'
      },
      inset: {
        '1/6': '4.166666%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

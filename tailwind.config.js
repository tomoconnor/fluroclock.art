module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        segmented: ["Segmented", "sans-serif"],
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
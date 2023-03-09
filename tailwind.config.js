/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
}

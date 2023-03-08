/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  daisyui: {
    themes: ["light", "dark", "dark"],
  },
  plugins: [require("daisyui")],
}

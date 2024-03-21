/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      text: {
        light: "#03070c",
        dark: "#F3F7FC",
      },
      background: {
        light: "#F7FAFD",
        dark: "#07101A",
      },
      primary: {
        light: "#4781CD",
        dark: "#326CB8",
      },
      secondary: {
        light: "#C386DF",
        dark: "#5D2079",
      },
      accent: {
        light: "#D367D5",
        dark: "#962A98",
      },
    },
    extend: {
      backgroundImage: {
        "hero-image": 'url("/images/hero-image.png")',
        "coins-image": 'url("/images/photo-1645731504331-72636399448e.jpeg")',
      },
    },
  },
  plugins: [["prettier-plugin-tailwindcss"], require("flowbite/plugin")],
};

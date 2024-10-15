/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        kuduOrange: "rgba(255, 111, 34, 1)",
        kuduGray: "rgba(141, 141, 141, 1)",
        kuduLightBlue: "rgba(241, 241, 242, 1)",
        kuduOrange500: "rgba(255, 133, 86, 1)"
      },
      backgroundImage: {
        'custom-bg': "url('/images/signInBg.png')",
        'signUp-bg': "url('/images/signUpBg.png')",
      },
    },
  },
  plugins: [],
};

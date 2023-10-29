
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
       screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      bc: "#050D21",
      primary: "#FFFDFB",
      secondary: "#B46CF8",
      danger: "#1A67F8",
      lightGrey: "#C9D5EE",
    },
    extend: {},
  },
  plugins: [],
}
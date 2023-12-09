/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // fontSize: {
    //   sm: "10px",
    //   md: "14px",
    //   xl: "20px",
    //   "2xl": "1.563rem",
    //   "3xl": "1.953rem",
    //   "4xl": "2.441rem",
    //   "5xl": "3.052rem",
    // },
    fontFamily: {
      oswald: ["Oswald", "san-serif"],
      quattrocento: ["Quattrocento", "san-serif"],
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "790px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

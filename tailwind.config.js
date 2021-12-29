module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        bar: "168px",
      },
      minWidth: {
        bar: "80px",
      },
      colors: {
        bar: "#B9BCBE",
        "yellow-main": "#FFDA44",
        "black-main": "#1F1F1F",
        "danger": "#E34141",
        "blue-secondary": "rgba(66, 159, 242, 0.1)",
        "blue-secondary-hover": "rgba(66, 159, 242, 0.3)",
        "yellow-pet": "#F4AB5C",
        "search-bg": "#F5F5F5",
        "search-font": "#88888C",
      },
      fontSize: {},
      margin: {
        "-0.5": "-2px",
      },
      // Text Color
      textColor: {},
      // Background color
      backgroundColor: {
       
      },
      fontFamily: {
        main: ["Poppins"],
      },
    },
    screens: {
      md: "350px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

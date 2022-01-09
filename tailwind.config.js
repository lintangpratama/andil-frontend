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
      width: {
        70: "270px",
      },
      height: {
        18: "75px",
      },
      maxWidth: {
        bar: "168px",
        illustration: "270px",
        screen: "416px",
      },
      minWidth: {
        bar: "80px",
      },
      colors: {
        secondary:"#404040",
        bar: "#B9BCBE",
        "yellow-main": "#FFDA44",
        "black-main": "#1F1F1F",
        danger: "#E34141",
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
      backgroundColor: {},
      fontFamily: {
        main: ["Poppins"],
      },
      boxShadow: {
        bottom: "0px 4px rgba(225,225,225,0.25)",
        modal: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
        modal2: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      },
      borderRadius: {
        'box': '10px'
      }
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

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
        13: "50px",
        18: "75px",
        23: "90px",
      },
      maxWidth: {
        bar: "168px",
        illustration: "270px",
        screen: "416px",
      },
      minWidth: {
        bar: "80px",
      },
      minHeight: {
        "history-box": "58px",
      },
      colors: {
        secondary: "#404040",
        bar: "rgba(31, 31, 31, 0.5)",
        "yellow-main": "#FFDA44",
        "black-main": "#1F1F1F",
        danger: "#E34141",
        success: "#56A38C",
        "blue-secondary": "rgba(66, 159, 242, 0.1)",
        "blue-secondary-hover": "rgba(66, 159, 242, 0.3)",
        "yellow-pet": "#F4AB5C",
        "search-bg": "#F5F5F5",
        "search-font": "#88888C",
        "blue-icon": "rgba(86, 163, 140, 0.2)",
        "yellow-icon": "rgba(234, 187, 0, 0.2)",
        "gray-icon": "rgba(196, 196, 196, 0.2)",
        "gray-history": "rgba(31, 31, 31, 0.7)",
      },
      fontSize: {},
      margin: {
        "-0.5": "-2px",
        8: "30px",
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
        menubar: "box-shadow: 0px -10px 8px 0px rgba(225,225,225,0.1)",
        modal: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
        modal2: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      },
      borderRadius: {
        box: "10px",
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

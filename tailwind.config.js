module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
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
        bar: "rgba(31, 31, 31, 0.8)",
        "yellow-main": "#FFDA44",
        "black-main": "#1F1F1F",
        "black-thin": "rgba(31, 31, 31, 0.7)",
        danger: "#E34141",
        success: "#56A38C",
        "blue-secondary": "rgba(66, 159, 242, 0.1)",
        "blue-secondary-hover": "rgba(66, 159, 242, 0.3)",
        "search-bg": "#F5F5F5",
        "search-font": "#88888C",
        tag: "#3C7564",
        "blue-icon": "rgba(86, 163, 140, 0.2)",
        "yellow-icon": "rgba(234, 187, 0, 0.2)",
        "gray-icon": "rgba(196, 196, 196, 0.2)",
        "purple-icon": "rgba(188, 133, 243, 0.2)",
        "brown-icon": "rgba(250, 178, 123, 0.2)",
        "gray-history": "rgba(31, 31, 31, 0.7)",
        "role-tag": "rgba(86, 163, 140, 0.5)",
        "bank": "#D0D0D0",
        "bank-logo": "#F0F0F0",
        "blue-icon": "#23A3DF"
      },
      fontSize: {
        8: "8px",
        12: "12px",
      },
      margin: {
        "-0.5": "-2px",
        "1/5": "20%",
        "1/12": "8.333333%",
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
        menubar: "0px -10px 8px 0px rgba(225,225,225,0.1)",
        transaction: "0px 0px 4px 0px rgba(0,0,0,0.25);",
        modal: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
        modal2: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      },
      borderRadius: {
        box: "10px",
        bank: "17px",
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

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: "black",
      blue: {
        primary: "#3B4CCA",
        dark: "#0B285F",
        light: "#0264AA",
      },
      grey: {
        primary: "#6C6663",
        light: "#D8D8D8",
        dark: "#21272B",
      },
      red: {
        primary: "#FF0000",
        dark: "#CC0000",
      },
      white: "white",
      yellow: {
        primary: "#FFCC00",
        dirty: "#B3A125",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

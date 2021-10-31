module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      aqua: {
        DEFAULT: "#18C7BB",
        light: "#E2F5F4",
      },
      pink: {
        DEFAULT: "#DE2F6E",
        light: "#FEF2F7",
      },
      sky: {
        DEFAULT: "#27A8DF",
        light: "#E2F1FC",
      },
      yellow: {
        DEFAULT: "#F5A70F",
        light: "#FFF5DA",
      },
      grey: {
        dark: "#0F2331",
        medium: "#446176",
        medium_light: "#A7B8C5",
        light: "#DEE5EA",
        super_light: "#F7F7F8",
      },
    },
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
    fontSize: {
      xs: ["10px", "12px"],
      sm: ["12px", "18px"],
      base: ["14px", "16px"],
      lg: ["20px", "23px"],
      xl: ["32px", "37px"],
    },
    letterSpacing: {
      tight: "0",
      normal: ".03em",
      wide: ".06em",
      wider: ".1em",
      widest: ".2em",
    },
    extend: {
      fill: (theme) => ({
        ...theme("colors"),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

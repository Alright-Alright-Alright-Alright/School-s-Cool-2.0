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
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
    fontSize: {
      xs: ["0.625rem", "0.75rem"],
      sm: ["0.75rem", "1.125rem"],
      base: [".875rem", "1rem"],
      lg: ["1.25rem", "1.5rem"],
      xl: ["2rem", "2.25rem"],
    },
    letterSpacing: {
      tight: "0",
      normal: ".03em",
      wide: ".06em",
      wider: ".1em",
      widest: ".2em",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "0.5px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    divideColor: (theme) => ({
      ...theme("borderColors"),
      primary: "#A7B8C5",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    extend: {
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
    inset: {
      0: 0,
      // ...
      64: "16rem",
      "1/5": "20%",
      "1/6": "16.66666667%",
      "1/7": "14.2857143%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

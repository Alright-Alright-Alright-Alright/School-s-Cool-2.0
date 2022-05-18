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
      green: {
        DEFAULT: "#16a34a",
      },
      sky: {
        DEFAULT: "#27A8DF",
        light: "#E2F1FC",
        dark: "#0284c7",
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
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
      },
      backgroundImage: {
        "login-background":
          "url('https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
    // inset: {
    //   0: 0,
    //   64: "16rem",
    //   "1/5": "20%",
    //   "1/6": "16.66666667%",
    //   "1/7": "14.2857143%",
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

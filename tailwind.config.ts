import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    borderWidth: {
      DEFAULT: "1.5px",
    },
    transitionDuration: {
      default: "200ms",
      0: "0ms",
    },
    colors: {
      bg: {
        DEFAULT: "#282828",
        0: "#282828",
        1: "#3C3836",
        2: "#504946",
        3: "#665C54",
        4: "#7C6F64",
        dark: "#1E2021",
      },
      fg: {
        DEFAULT: "#EBDBB2",
        0: "#FBF1C7",
        1: "#EBDBB2",
        2: "#D5C4A1",
        3: "#BCAF93",
        4: "#A79A84",
      },
      primary: {
        DEFAULT: "#FE8018",
        dark: "#D65D0D",
      },
      secondary: {
        DEFAULT: "#B9BB25",
        dark: "#989719",
      },
      red: {
        DEFAULT: "#FB4A34",
        dark: "#CD241E",
      },
      yellow: {
        DEFAULT: "#FABD2E",
        dark: "#D79920",
      },
      blue: {
        DEFAULT: "#83A598",
        dark: "#458588",
      },
      purple: {
        DEFAULT: "#D3859B",
        dark: "#B16286",
      },
      aqua: {
        DEFAULT: "#8DC07C",
        dark: "#689D6A",
      },
    },
    extend: {
      fontFamily: {
        mono: ["Ubuntu Mono", "monospace"],
      },
      height: {
        border: "1.5px",
      },
    },
  },

  plugins: [forms]
} satisfies Config;

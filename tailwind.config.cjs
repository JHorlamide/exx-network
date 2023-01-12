/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["16px", { letterSpacing: "28px", letterSpacing: "-0.03em" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "3xl": ["44px", { lineHeight: "57.6px", letterSpacing: "-0.032em" }],
      "4xl": ["64px", { lineHeight: "76.8px", letterSpacing: "-0.032em" }],
      "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
    },

    colors: {
      white: "#FFFFFF",
      blue: "#174AFF",
      dark: "#000000",
      gray: "#94A9AC",
      red: "rgb(225 29 72)",
      "dark-yellow": "#FFCB67",
      "dark-blue": "#0077FE",
      "light-gray": "#D9D9D9",
      "dak-blue": "#1D2A65",
      "light-green": "#D3F4F9",
      "light-blue": "#E8F2FF",
      "transparent-green": "#C5F3F0",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};

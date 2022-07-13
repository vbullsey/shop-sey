module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        shopsey: {
          primary: "#fc76ef",
          secondary: "#06a316",
          accent: "#e053d4",
          neutral: "#212131",
          "base-100": "#323539",
          info: "#76A4EF",
          success: "#2AB26B",
          warning: "#D49D08",
          error: "#E2284D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

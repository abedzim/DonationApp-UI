const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        app: {
          1: "#00afb9",
          2: "#f07167",
          3: "#0081a7",
          4: "#fdfcdc",
          5: "#fed9b7",
          text1: "#475569",
          text2: "#94a3b8",
          text3: "#cbd5e1",
          text4: "#e2e8f0",
          text5: "#f1f5f9",
        },
      },
      fontFamily: {
        f1: "Lexend_300Light",
        f2: "Lexend_400Regular",
        f3: "Lexend_500Medium",
        f4: "Lexend_600SemiBold",
        f5: "Lexend_700Bold",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        btn: `h-12 items-center justify-center bg-app-1 rounded-full`,
        btnRadio: `border-2 border-app-1 rounded-full w-5 h-5 items-center justify-center`,
        btnRadio2: `border-2 border-app-text4 rounded-full w-5 h-5 items-center justify-center`,
        btnRadioChecked: `bg-app-1 rounded-full w-3 h-3`
      });
    }),
  ],
};

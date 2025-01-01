/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%, 100%": { left: "0%" },
          "50%": { left: "calc(100% + 4px)" },
        },
      },
      animation: {
        typing: "typing 4s steps(12) infinite",
      },
    },
  },
  plugins: [],
};

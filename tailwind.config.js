/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#fff7f1",
          peach: "#f6c7b6",
          rose: "#db8e8d",
          cocoa: "#5f4037",
          ink: "#2f241f",
        },
      },
      boxShadow: {
        soft: "0 18px 40px rgba(95, 64, 55, 0.12)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        fontorg: ["fontorg", "sans-serif"],
        english: ["english", "sans-serif"],
      },
      variants: {
        extend: {
          opacity: ["group-hover"],
          visibility: ["group-hover"],
          transform: ["group-hover"],
        },
      },
    },
  },
  plugins: [],
};

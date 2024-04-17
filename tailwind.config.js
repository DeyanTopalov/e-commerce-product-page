/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue});`;
    }
    return `hsla(var($variableName}))`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-orange-dark": withOpacity("--orange-dark"),
        "clr-orange-light": withOpacity("--orange-light"),
        "clr-black": withOpacity("--black"),
        "clr-blue-200": withOpacity("--blue-200"),
        "clr-blue-400": withOpacity("--blue-400"),
        "clr-blue-600": withOpacity("--blue-600"),
        "clr-blue-800": withOpacity("--blue-800"),
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadein: "fadein 200ms ease-in ",
      },
    },
  },
  plugins: [],
};

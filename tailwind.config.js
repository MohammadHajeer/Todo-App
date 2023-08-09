/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-light": "url('/src/images/bg-desktop-light.jpg')",
        "desktop-dark": "url('/src/images/bg-desktop-dark.jpg')",
        "mobile-light": "url('/src/images/bg-mobile-light.jpg')",
        "mobile-dark": "url('/src/images/bg-mobile-dark.jpg')",
      },
      width: {
        "footer-w": "calc(100% - 64px)",
      },
      translate: {
        note: "calc(100% + 56px + 10px)",
      },
    },
  },
  plugins: [],
};

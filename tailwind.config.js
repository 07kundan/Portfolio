// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
    extendedSpacingScale: true,
    sticky: true, // enable the sticky utility
  },
};

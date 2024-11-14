/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        scene: "var(--scene-color)",
        muted: "var(--muted-color)",
        searchBg: "var(--search-bg)",
        mainText: "var(--text-color-main)",
        invertedText: "var(--text-color-inverted)",
        lightText: "var(--text-color-light)",
        shadowColor: "var(--shadow-color)"
      },
    },
  },
  plugins: [],
};

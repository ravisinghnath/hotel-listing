/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "main-bg":"var(--color-main-bg)",
        // "primary-bg":"var(--color-primary-bg)",
        // "secondary-bg":"var(--color-secondary-bg)",

        // "primary-text":"var(--color-primary-text)",
        // "secondary-text":"var(--color-secondary-text)"

        "main-bg": "rgba(255, 255, 255, 1)",
        "primary-bg": "rgba(191, 52, 62, 1)",
        "secondary-bg": "rgba(255, 245, 246, 1)",
        "pink-bg": "rgba(253, 223, 225, 1)",
        "teritary-bg": "rgba(249, 249, 249, 1)",
        "head-bg": "rgba(240, 240, 240, 1)",
        "overlay-bg": "rgba(0, 0, 0, 0.5)",
        "border-color": "rgba(183, 183, 183, 1)",
        "star-color": "rgba(237, 203, 88, 1)",
        "border-secondary": "rgba(232, 232, 232, 1)",
        "border-teritary": "rgba(183, 183, 183, 1)",
        "border-pink": "rgba(255, 201, 205, 1)",

        "primary-text": "rgba(40, 40, 40, 1)",
        "secondary-text": "rgba(110, 110, 110, 1)",
        "tertiary-text": "rgba(3, 177, 10, 1)",
      },

      container: {
        center: true, // Centers the container
        padding: "20px", // Adds padding to prevent content from touching edges
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1250px", // Custom width for extra large screens
          "2xl": "1400px", // Even wider container
        },
      },

      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

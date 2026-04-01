/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "header-bg": "var(--header-bg)",
        "item-bg": "var(--item-bg)",
        "header-button-bg": "var(--header-button-bg)",
        "item-button-bg": "var(--item-button-bg)",
        "hero-demo-btn-bg": "var(--hero-demo-btn-bg)",
        "text-primary-color": "var(--text-primary-color)",
        "header-text-primary": "var(--header-text-primary)",
        "header-button-text": "var(--header-button-text)",
        "hero-text-primary": "var(--hero-text-primary)",
        "hero-text-secondary": "var(--hero-text-secondary)",
        "hero-image-shadow-color": "var(--hero-image-shadow-color)",
      },
    },
  },
  plugins: [],
};


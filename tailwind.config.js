/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["var(--font-mulish)"],
      },
      colors: {
        "black": "var(--black)",
        "white": "var(--white)",
        "green": "var(--green)",
        "green-dark": "var(--green-dark)",
        "olive": "var(--olive)",
        "swamp": "var(--swamp)",
        "coral": "var(--coral)",
        "coral-dark": "var(--coral-dark)",
        "pearl": "var(--pearl)",
        "laurel": "var(--laurel)",
      },
      boxShadow: {
        "signin-button": "var(--shadow-signin-button)",
        "outline-button": "var(--shadow-outline-button)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1200px",
        },
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '992px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1600px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

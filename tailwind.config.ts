import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "system-ui", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          light: "#F5F4F6",
          DEFAULT: "hsl(var(--background))",
        },
        foreground: "hsl(var(--foreground))",
        // Colores del sitio original
        primary: {
          DEFAULT: "#000000",
          light: "#647E9C",
          dark: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#EFA367",
          light: "#FFB685",
        },
      },
      borderRadius: {
        '2xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      height: {
        '18': '4.5rem',
      },
      maxWidth: {
        'site': '1150px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
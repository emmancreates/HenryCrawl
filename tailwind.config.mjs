/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef7f1",
          100: "#d6ecdf",
          200: "#aedabf",
          300: "#7cc098",
          400: "#4ba074",
          500: "#2d7a55",
          600: "#226341",
          700: "#184b34",
          800: "#123a29",
          900: "#0f2e22",
          950: "#081a13"
        },
        clay: {
          DEFAULT: "#c06a3f",
          50: "#fbf1ea",
          100: "#f4dccc",
          300: "#e0a583",
          500: "#c06a3f",
          600: "#a4552e",
          700: "#7f4022"
        },
        honey: "#e0b450",
        slate: {
          950: "#13201a"
        },
        ink: "#13201a",
        mist: "#f4f8f5",
        sand: "#f7f3ec",
        cream: "#fbf9f4",
        stonewash: "#e4ebe5"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "ui-serif", "Georgia", "serif"]
      },
      borderRadius: {
        "4xl": "2rem"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(19, 32, 26, 0.08)",
        card: "0 4px 14px rgba(19, 32, 26, 0.05), 0 14px 36px -18px rgba(19, 32, 26, 0.18)",
        lift: "0 18px 46px -16px rgba(19, 32, 26, 0.30)",
        glow: "0 24px 60px -24px rgba(24, 75, 52, 0.55)"
      },
      backgroundImage: {
        "forest-radial": "radial-gradient(120% 120% at 0% 0%, #226341 0%, #184b34 45%, #0f2e22 100%)",
        "mesh": "radial-gradient(60% 60% at 85% 10%, rgba(45,122,85,0.12) 0%, transparent 60%), radial-gradient(50% 50% at 5% 85%, rgba(192,106,63,0.12) 0%, transparent 60%)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

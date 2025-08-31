/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;

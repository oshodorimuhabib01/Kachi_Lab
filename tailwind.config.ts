/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#050629",
          foreground: "#ffffff",
          primary: "#6366f1",
        },
      },
    },
    plugins: [],
  }
  
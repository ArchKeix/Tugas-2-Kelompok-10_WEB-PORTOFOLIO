/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ctp: {
          base: '#1e1e2e',
          mantle: '#181825',
          crust: '#11111b',
          text: '#cdd6f4',
          subtext0: '#bac2de',
          subtext1: '#a6adc8',
          surface0: '#45475a',
          surface1: '#585b70',
          surface2: '#6c7086',
          mauve: '#cba6f7',
          blue: '#89b4fa',
          green: '#a6e3a1',
          lavender: '#b4befe',
          peach: '#fab387',
          yellow: '#f9e2af',
          red: '#f38ba8',
          sapphire: '#74c7ec',
          sky: '#89dceb',
          teal: '#94e2d5',
        }
      },
      fontFamily: {
        pixel: ['Silkscreen', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

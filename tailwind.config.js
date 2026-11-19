/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080c14',
          surface: '#0d1527',
          card: '#111c34',
          cardHover: '#162342',
          border: '#1e2d4d',
          borderHighlight: '#06b6d4',
          cyan: '#06b6d4',
          cyanGlow: '#22d3ee',
          blue: '#3b82f6',
          emerald: '#10b981',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'cyan-glow-lg': '0 0 35px -5px rgba(6, 182, 212, 0.4)',
        'blue-glow': '0 0 25px -5px rgba(59, 130, 246, 0.25)',
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle, rgba(6, 182, 212, 0.08) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};

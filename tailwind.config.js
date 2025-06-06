// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      colors: {
        'bg-color': 'var(--colors--bg-color)',
        'font-color': 'var(--colors--font-color)',
        'paragraph-font': 'var(--colors--paragraph-font)',
        'gradient-color-01': 'var(--colors--gradient-color-01)',
        'accent-color': 'var(--colors--acent-color)',
        'element-color': 'var(--colors--element-color)',
        'element-color-03': 'var(--colors--element-color-03)',
        'element-stroke-color': 'var(--colors--element-stroke-color)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(at 50% 10%, rgba(255, 255, 255, 0.04) 40%, rgba(36, 65, 197, 1) 100%)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease forwards',
        "rotate-slow": "rotate-slow 25s linear infinite",
        "rotate-medium": "rotate-medium 20s linear infinite", 
        "rotate-fast": "rotate-fast 15s linear infinite",     
        "rotate-reverse": "rotate-reverse 22s linear infinite",
        'pulse-subtle': 'pulse-subtle 8s ease-in-out infinite alternate',
        'pulse-width': 'pulse-width 3s ease-in infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "rotate-slow": {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        "rotate-medium": {  // Added missing keyframes
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        "rotate-fast": {    // Added missing keyframes
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        "rotate-reverse": {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' }
        },
        'pulse-subtle': {
          '0%': { opacity: 0.9 },
          '100%': { opacity: 1 },
        },
        'pulse-width': {
          '0%, 100%': { width: '0px' },
          '50%': { width: '100%' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent)',
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
        'radial-at-t': 'radial-gradient(at top, var(--tw-gradient-stops))',
        'radial-at-b': 'radial-gradient(at bottom, var(--tw-gradient-stops))',
        'radial-at-l': 'radial-gradient(at left, var(--tw-gradient-stops))',
        'radial-at-r': 'radial-gradient(at right, var(--tw-gradient-stops))',
        'radial-at-tl': 'radial-gradient(at top left, var(--tw-gradient-stops))',
        'radial-at-tr': 'radial-gradient(at top right, var(--tw-gradient-stops))',
        'radial-at-bl': 'radial-gradient(at bottom left, var(--tw-gradient-stops))',
        'radial-at-br': 'radial-gradient(at bottom right, var(--tw-gradient-stops))',
        'radial-custom': 'radial-gradient(at 50% 10%, rgba(255,255,255,0.04) 40%, rgba(36,65,197,1) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#2441c5',
        'secondary': '#d3fe37',
        'bg-color': '#02030a',
        'element-color': '#05091c',
        'element-color-03': '#0a133b',
        'element-color-02': '#030611',
        'font-color': '#fff',
        'paragraph-font': '#fffc',
        'acent-color': '#d3fe37',
        'acent-color-low': '#dfe5e1',
        'gradient-color-01': '#2441c5',
        'gradient-color-02': '#ffe2e2',
        'element-stroke-color': '#0e1a4e',
        'stroke-color': '#bea7ff1a',
        // Legacy colors for backwards compatibility
        'highlight': '#2441c5',
        'light-text': '#fff',
        'light-border': '#0e1a4e',
        // Custom colors for the query section
        "soft-beige": "#05091c",
        "light-pink": "#0a133b", 
        "coral": "#d3fe37",
      }
    },
  },
  plugins: [],
}


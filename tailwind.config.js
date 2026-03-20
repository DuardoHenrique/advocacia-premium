/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#07070A',
          surface: '#0D0D12',
          elevated: '#111118',
        },
        text: {
          primary: '#F3F1EC',
        },
        accent: {
          DEFAULT: '#C5A059',
          dark: '#8F7440',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'default': '32px',
        'large': '40px',
        'pill': '9999px',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}

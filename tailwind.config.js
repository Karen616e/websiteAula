/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Source Sans Pro"', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

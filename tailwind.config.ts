import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      boxShadow: {
        xl: '0 4px 20px 0 rgba(0, 0, 0, 0.06)',
      },
      colors: {
        white: '#fff',
        black: '#151516',
        blue: '#191847',
        orange: '#F5850B',
        gray: {
          '50': '#F4F3F6',
          '100': '#E1DEE8',
          '200': '#C9C5D4',
          '300': '#666173',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: ['0.625rem', '1rem'],
      },
    },
  },
  plugins: [],
}
export default config

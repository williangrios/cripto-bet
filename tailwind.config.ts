import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#b3e0ff',
          medium: '#1a90ff',
          strong: '#004599'
        },
        secondary: {
          light: '#fff2cc',
          medium: '#ffd966',
          strong: '#e6b800'
        },
        text: {
          light: '#444',
          dark: '#ddd'
        }
      }
    },
  },
  plugins: [],
}
export default config

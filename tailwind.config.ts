import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "home-bg": "url('/home-bg.jpg')",
        "about-bg": "url('/about-bg.jpg')"
      },
      colors: {
        "primary-red": "#FF0205",
        "primary-gold": "#CDC28A",
      }
      ,screens: {
        "2k": "1440px"
      }
    },
  },
  plugins: [],
}
export default config

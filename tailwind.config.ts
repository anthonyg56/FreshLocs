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
        "fresh-red": "#FF0205",
        "fresh-black": "#0B0B0B",
        "fresh-grey": "#7D7D7D"
      },
      screens: {
        "FHD": "1920px",
        "2k": "2560px"
      }
    },
  },
  plugins: [],
}
export default config

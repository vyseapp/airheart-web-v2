import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          purple: '#a855f7',
          pink: '#ec4899',
          orange: '#f97316'
        }
      },
    },
  },
  plugins: [],
}

export default config
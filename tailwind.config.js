module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,md}',
    './components/**/*.{js,ts,jsx,tsx,md}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['JetBrains Mono', 'monospace']
    },
    fontSize: {
      sm: '0.8rem',
      base: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '2.441rem',
      '5xl': '65px',
    },
    extend: {
      lineHeight: {
        'base': '24px',
        'header': '74px',
      }
    }
  },
  plugins: [],
}

/*
  FONT WEIGHT

  font-light 300
  font-normal 400 (default)
  font-medium 500
  font-semibold 600
  font-bold 700
  font-black 900
*/

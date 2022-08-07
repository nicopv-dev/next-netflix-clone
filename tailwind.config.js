module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      netflix: '#F40B15',
      netflixBg: '#141414',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#9B9B9B',
      category: '#96E6B3',
      transparent: 'transparent',
      none: 'rgba(0,0,0,0.12958686892725846)',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        main: "url('https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/e1930d7a-c6e4-4854-a489-b00e6262c750/CL-es-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        gradientToB:
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 12%,rgba(20,20,20,.35) 20%,rgba(20,20,20,.58) 50%,#141414 90%,#141414 100%);',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    hero: {
      '50%': '50%',
    },
    extend: {
      heroImage: {
        'compSciPhoto': "url('/src/assets/compSciPhoto.jpg')",
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

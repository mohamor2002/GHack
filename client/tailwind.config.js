module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'main': ['Poppins'],
    },
    extend:{
      colors:{
        'main-blue':'#00829C',
        'main-green':'#95D60A',
        'main-gray':"#F0F6FC"
      }
    }
  },
  variants: {},
  plugins: [],
}
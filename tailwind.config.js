module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-desk': "url('./public/build/bg-intro-desktop.png')",
        'hero-mob': "url('./public/build/bg-intro-mobile.png')",
       }),

      colors: {
        ip: {
          main: "#FF7978",
          primary: "#FF7978",
          secondary: "#5D54A3",
          btnn: "#37CC8A"
        }
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('')",
        'footer-texture': "url('/img/footer-texture.png')",
       }),

      colors: {
        ip: {
          primary: "#FF7978",
          secondary: "#5D54A3",
          footer: "#FAFAFA"
        }
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

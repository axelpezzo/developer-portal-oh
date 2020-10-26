module.exports = {
  plugins: [
    'gatsby-theme-docz-oh',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-docz-oh'],
      },
    },
  ],
}

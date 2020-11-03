export default {
  lang: 'en',
  files: '**/*.mdx',
  ignore: ['./*.md'],
  title: 'Documentation',
  description: 'OH Docs',
  base: '/',
  menu: [
    'Home',
    'OH Core',
    'OH GUI',
    'OH Doc',
    'OH UI',
    'OH API',
  ],
  menuDisplayName: {
  },
  groups: {
  },
  apis: 'https://www.open-hospital.org/oh-api/swagger-ui/index.html',
  repository: 'https://github.com/informatici/openhospital',
  themeConfig: {
    search: false,
    showDarkModeSwitch: false,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    header: {
      icons: 'minimal',
      fixed: false,
    },
    footer: {
      navigation: true,
    },
    logo: {
      // src: '/public/assets/logo.svg' // use this line if you want one logo for both color modes
      src: {
        light: '/public/assets/logo.svg',
        dark: '/public/assets/logo.svg'
      },
      width: 200,
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
  },
  docgenConfig: {
    searchPatterns: [
      '**/*.{ts,tsx,js,jsx,mjs}',
      'gatsby-theme-docz-oh/src/gatsby-theme-docz/custom-components/**/*.{ts,tsx,js,jsx,mjs}',
      '!**/node_modules',
      '!../**/node_modules',
      '!**/doczrc.js',
      '!../**/doczrc.js',
    ],
  },
  filterComponents: (files) =>
    files.filter((filepath) => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};
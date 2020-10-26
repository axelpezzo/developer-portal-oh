/* eslint-disable react/jsx-pascal-case */
import {ComponentsProvider, theme, useConfig} from 'docz';
import baseComponents from 'gatsby-theme-docz/src/components';
import defaultConfig from 'gatsby-theme-docz/src/theme';
import {merge} from 'lodash/fp';
import React from 'react';
import {Styled, ThemeProvider} from 'theme-ui';

const componentsMap = {
  ...baseComponents,
};

// eslint-disable-next-line react/prop-types
const Theme = ({children}) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={componentsMap}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

const themeConfig = merge(defaultConfig, {
  initialColorMode: 'light',
  colors: {
    primary: '#fe4641',
    sidebar: {
      navLinkActive: '#fe4641'
    },
    modes: {
      light: {
        primary: '#fe4641',
        grayLighter: '#d0d0d0',
        gray2: '#aaa',
        text: '#676767',
        title: '#444',
        background2: '#fff',
        info: 'rgb(56, 132, 255)',
        success: 'rgb(0, 204, 136)',
        warning: 'rgb(255, 204, 0)',
        danger: 'rgb(243, 32, 19)',
        default: 'rgb(0, 0, 0, .3)',
        infoLight: 'rgba(56, 132, 255, .1)',
        successLight: 'rgba(0, 219, 136, .1)',
        warningLight: 'rgba(255, 204, 0, .1)',
        dangerLight: 'rgba(243, 32, 19, .1)',
        defaultLight: 'rgba(0, 0, 0, .04)',
        backdrop: 'rgba(0, 0, 0, .15)',
        sidebar: {
          navLinkActive: '#fe4641'
        },
      },
      dark: {
        primary: '#fe4641',
        grayLighter: '#bbb',
        gray2: '#aaa',
        text: '#b6b6b6',
        title: '#C4C4C4',
        background2: 'rgba(0,0,0,.1)',
        info: 'rgb(56, 132, 255)',
        success: 'rgb(0, 204, 136)',
        warning: 'rgb(255, 204, 0)',
        danger: 'rgb(243, 32, 19)',
        default: 'rgb(255, 255, 255, .6)',
        infoLight: 'rgba(56, 132, 255, .1)',
        successLight: 'rgba(0, 219, 136, .1)',
        warningLight: 'rgba(255, 204, 0, .1)',
        dangerLight: 'rgba(243, 32, 19, .1)',
        defaultLight: 'rgba(255, 255, 255, .3)',
        backdrop: 'rgba(255, 255, 255, .15)',
        sidebar: {
          navLinkActive: '#fe4641'
        },
      },
    },
  },
  boxShadow: '0 3px 7px 0 rgba(105, 111, 132, 0.1)',
  styles: {
    root: {
      fontFamily: `'Open Sans', sans-serif`,
      fontSize: '18px',
      color: 'text',
      bg: 'background',
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '0.4s',
    },
    h1: {
      fontFamily: `'Montserrat', sans-serif`,
      color: 'title',
    },
    h2: {
      fontFamily: `'Montserrat', sans-serif`,
      color: 'title',
    },
    h3: {
      fontFamily: `'Montserrat', sans-serif`,
      color: 'title',
    },
    h4: {
      fontFamily: `'Montserrat', sans-serif`,
      color: 'title',
    },
    h5: {
      fontFamily: `'Montserrat', sans-serif`,
      color: 'title',
    },
    h6: {
      fontFamily: `'Montserrat', sans-serif`,
      color: 'title',
    },
    code: {
      fontFamily: 'Consolas, monaco, monospace',
    },
    inlineCode: {
      position: 'relative',
      display: 'inline-block',
      fontFamily: 'Consolas, monaco, monospace',
      backgroundColor: defaultConfig.colors.blockquote.bg,
      color: defaultConfig.colors.grayDark,
      fontSize: '0.85em',
      letterSpacing: '-0.3px',
      padding: '3px 8px',
      borderRadius: '3px',
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'collapse',
      borderSpacing: 0,
      [['th', 'td']]: {
        textAlign: 'left',
        py: '12px',
        pr: '12px',
        pl: '12px',
        borderColor: 'border',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'middle',
      borderBottomWidth: '1px',
    },
    td: {
      verticalAlign: 'middle',
      borderBottomWidth: '1px',
    },
    hr: {
      margin: '3rem 0 !important',
    },
  },
});

export default theme(themeConfig)(Theme);

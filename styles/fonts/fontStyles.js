import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Junicode';
        src: local('Junicode'), local('Junicode'),
        url("/static/fonts/Junicode.woff") format('woff2'),
        url("/static/fonts/Junicode.woff") format('woff');
        font-weight: 300;
        font-style: normal;
    } 

    @font-face {
      font-family: 'Droid';
      src: local('Droid'), local('Droid'),
      url("/static/fonts/DroidSerif.woff") format('woff2'),
      url("/static/fonts/DroidSerif.woff") format('woff');
      font-weight: 300;
      font-style: normal;
  } 
`

const theme = {
  fonts: {
    junicode: 'Junicode',
    droid: 'Droid',
  },
  colors: {
    // Blacks
    lightBlack: '#3f3f3f',
    // Reds
    red: '#AA4465',
    mediumRed: '#680727',
    darkRed: '#350313',
    redBall: '#3e0e1e',
  },
  fontSizes: {
    small: '0.875rem',
    base: '1rem',
    twoTimes: '1.5rem',
    threeTimes: '1.875rem',
    fourTimes: '2.25rem',
  },
  lineHeights: {
    small: '1.25rem',
    base: '1.5rem',
    twoTimes: '2rem',
    threeTimes: '2.25rem',
    fourTimes: '2.5rem',
  },
  fontWeights: {
    semiBold: '600',
  },
}

const Theme = ({children}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default [FontStyles, Theme]

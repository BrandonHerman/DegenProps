import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    transparent: 'transparent',
    primaryOrange: '#E59560',
    primaryBlue: '#BACEC1',
    primaryWhite: '#F6F4E8',
    primaryGreen: '#1D3124',
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
})

export default theme;

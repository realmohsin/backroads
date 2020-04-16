import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const primaryColor = '#3fd0d4'
const sectionBg = '#EAE8EA'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    common: {
      sectionBg
    }
  },
  typography: {
    fontFamily: ['Lato', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
    htmlFontSize: 10, // tells typography API what 1rem is going to be set to
    h1: {
      fontFamily: ['Poppins', 'sans-serif'].join(', '),
      // fontWeight: 300,
      // fontSize: '6rem',
      // lineHeight: 1.167,
      letterSpacing: '2px',
      wordSpacing: '1.5rem'
    },
    h2: {
      fontFamily: ['Poppins', 'sans-serif'].join(', '),
      letterSpacing: '3px'
    },
    h3: {
      fontFamily: ['Poppins', 'sans-serif'].join(', ')
      // fontSize: '3rem'
    },
    subtitle1: {
      fontSize: '2.6rem',
      letterSpacing: '1px',
      wordSpacing: '0.2rem'
    },
    body1: {}
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '62.5%'
        },
        a: {
          textDecoration: 'none',
          color: 'inherit'
        },
        ul: {
          listStyle: 'none'
        },
        '::selection': {
          backgroundColor: primaryColor,
          color: 'white'
        }
      }
    },
    MuiTypography: {
      paragraph: {
        // default marginBottom: '16px'
      },
      gutterBottom: {
        // default marginBottom: '0.35em'
      }
    },
    MuiButtonBase: {
      disableRipple: true
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme

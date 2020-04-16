import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Backroads</title>
        <link
          href='https://fonts.googleapis.com/css?family=Lato|Poppins:300,400&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout

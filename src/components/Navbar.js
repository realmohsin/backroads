import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { FaAlignRight } from 'react-icons/fa'
import logo from '../images/logo.svg'
import { Box, Icon } from '@material-ui/core'
import socialLinks from '../data/social-links'
import pageLinks from '../data/page-links.json'

const Navbar = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <AppBar position='static' color='transparent'>
      <Container disableGutters>
        <Toolbar className={classes.toolbar}>
          <Box>
            <img src={logo} alt='logo' />
          </Box>

          <Hidden lgUp>
            <IconButton>
              <FaAlignRight />
            </IconButton>
          </Hidden>

          <Hidden mdDown>
            <Grid container spacing={5} style={{ width: 'max-content' }}>
              {pageLinks.map(pageLink => (
                <Grid item key={pageLink.text}>
                  <AniLink
                    fade
                    to={pageLink.path}
                    activeClassName={classes.activeLink}
                  >
                    <Typography variant='body1' className={classes.navLink}>
                      {pageLink.text}
                    </Typography>
                  </AniLink>
                </Grid>
              ))}
            </Grid>
          </Hidden>

          <Hidden mdDown>
            <Grid container style={{ width: 'max-content' }} spacing={3}>
              {socialLinks.map(socialLink => (
                <Grid item key={socialLink.url}>
                  <a href={socialLink.url} className={classes.socialLink}>
                    {socialLink.icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: 'space-between',
    height: '74px'
  },
  navLink: {
    fontSize: '20px',
    letterSpacing: '2px',
    textTransform: 'capitalize'
  },
  socialLink: {
    fontSize: '2.6rem',
    color: theme.palette.primary.main
  },
  activeLink: {
    color: theme.palette.primary.dark
  }
}))

export default Navbar

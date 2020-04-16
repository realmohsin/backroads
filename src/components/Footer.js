import React from 'react'
import { Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import pageLinks from '../data/page-links.json'
import socialLinks from '../data/social-links'

function Copyright () {
  return (
    <Typography variant='body2' align='center'>
      <Box component='span' mx='5px'>
        {'Copyright © '}
      </Box>
      <Link color='inherit' href='https://material-ui.com/'>
        Backroads Travel Company
      </Link>{' '}
      <Box component='span' mx='5px'>
        {new Date().getFullYear()}
      </Box>
      {'All Rights Reserved'}
    </Typography>
  )
}

const Footer = props => {
  const classes = useStyles()

  return (
    <Box component='footer' p={7} pb={10} bgcolor='black' color='white'>
      <Grid container justify='center' spacing={5}>
        {pageLinks.map(pageLink => (
          <Grid item key={pageLink.text}>
            <Link to={pageLink.path}>
              <Typography variant='body1' className={classes.navLink}>
                {pageLink.text}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box mt={2} mb={3}>
        <Grid container justify='center' spacing={5}>
          {socialLinks.map(socialLink => (
            <Grid item key={socialLink.url}>
              <a href={socialLink.url} className={classes.socialLink}>
                {socialLink.icon}
              </a>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Copyright />
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  socialLink: {
    fontSize: '4rem',
    color: theme.palette.primary.main
  },
  navLink: {
    fontSize: '20px',
    letterSpacing: '2px',
    textTransform: 'capitalize'
  }
}))

export default Footer

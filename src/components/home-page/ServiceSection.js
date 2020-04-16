import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box, Grid, Typography, Button } from '@material-ui/core'
import SectionTitle from '../SectionTitle'
import services from '../../data/services'

const Boilerplate = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box
      component='section'
      py={['110px']}
      bgcolor={theme.palette.common.sectionBg}
    >
      <SectionTitle firstPhrase='Our' secondPhrase='Services' />
      <Box my={[12]}>
        <Grid container justify='center' spacing={8}>
          {services.map(service => (
            <Grid item key={service.title} className={classes.serviceCard}>
              <Box>
                <Box
                  mx='auto'
                  width='max-content'
                  bgcolor='primary.main'
                  p={3}
                  fontSize='4rem'
                  mb={5}
                >
                  {service.icon}
                </Box>
                <Typography variant='subtitle1' align='center' gutterBottom>
                  {service.title.toUpperCase()}
                </Typography>
                <Typography variant='body1' align='center' gutterBottom>
                  {service.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  serviceCard: {
    width: '500px'
  },
  example: {
    // ...mobile first styles,
    [theme.breakpoints.up('sm')]: {
      //...sm and up styles
    },
    [theme.breakpoints.up('md')]: {
      //...md and up styles
    }
  }
}))

export default Boilerplate

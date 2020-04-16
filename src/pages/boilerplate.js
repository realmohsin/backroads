import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box, Grid } from '@material-ui/core'

const Boilerplate = props => {
  const classes = useStyles()
  const theme = useTheme()

  const atXsDown = useMediaQuery(theme.breakpoints.down('xs')) // below 600
  const atSmDown = useMediaQuery(theme.breakpoints.down('sm')) // below 960
  const atMdDown = useMediaQuery(theme.breakpoints.down('md')) // below 1280
  const atLgDown = useMediaQuery(theme.breakpoints.down('lg')) // below 1920
  const atXlDown = useMediaQuery(theme.breakpoints.down('xl')) // below infinity

  const atXsUp = useMediaQuery(theme.breakpoints.up('xs')) // 0 and above
  const atSmUp = useMediaQuery(theme.breakpoints.up('sm')) // 600 and above
  const atMdUp = useMediaQuery(theme.breakpoints.up('md')) // 960 and above
  const atLgUp = useMediaQuery(theme.breakpoints.up('lg')) // 1280 and above
  const atXlUp = useMediaQuery(theme.breakpoints.up('xl')) // 1920 and above

  const atSmOnly = useMediaQuery(theme.breakpoints.only('sm')) // only between 600 and 959
  const betweenSmLg = useMediaQuery(theme.breakpoints.between('sm', 'lg')) // only between 600 and 1919

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item>
        <Box>realmaster</Box>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
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

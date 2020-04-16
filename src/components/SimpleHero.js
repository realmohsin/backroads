import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import defaultBcg from '../images/defaultBcg.jpeg'

const SimpleHero = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      component='header'
      className={classes.hero}
    >
      {children}
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  hero: {
    minHeight: 'calc(100vh - 74px)',
    background: `linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7)), url(${defaultBcg}) center/cover no-repeat`
  }
}))

export default SimpleHero

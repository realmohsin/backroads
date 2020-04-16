import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box, Grid, Typography } from '@material-ui/core'

const SectionTitle = ({ firstPhrase, secondPhrase }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box component='header' my={3}>
      <Typography variant='h2' align='center'>
        <span className={classes.firstPhrase}>{firstPhrase.toUpperCase()}</span>
        <span className={classes.secondPhrase}>
          {secondPhrase.toUpperCase()}
        </span>
      </Typography>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  firstPhrase: {
    marginRight: '0.9rem'
  },
  secondPhrase: {
    marginLeft: '0.9rem',
    color: theme.palette.primary.main
  }
}))

export default SectionTitle

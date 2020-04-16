import React from 'react'
import { Box, Typography } from '@material-ui/core'

const Banner = ({ title, info, children }) => {
  return (
    <Box color='white' p={3}>
      <Typography variant='h1' align='center' gutterBottom>
        {title.toUpperCase()}
      </Typography>
      <Typography variant='subtitle1' align='center' gutterBottom>
        {info}
      </Typography>
      <Box m='45px auto' width='max-content'>
        {children}
      </Box>
    </Box>
  )
}

export default Banner

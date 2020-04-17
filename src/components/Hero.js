import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import defaultBcg from '../images/defaultBcg.jpeg'

const Hero = ({ children, home, img }) => {
  const classes = useStyles()
  return (
    <BackgroundImage
      fluid={img}
      className={`${classes.hero} ${home ? classes.homeHero : ''}`}
    >
      {children}
    </BackgroundImage>
  )
}

const useStyles = makeStyles(theme => ({
  hero: {
    minHeight: '50vh',
    opacity: '1 !important', // gradient doesn't work without this for some reason
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeHero: {
    minHeight: 'calc(100vh - 74px)',
    background: 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
}))

export default Hero

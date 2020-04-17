import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box, Grid, Typography, Button } from '@material-ui/core'
import SectionTitle from '../SectionTitle'
import defaultBcg from '../../images/defaultBcg.jpeg'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getAboutImage = graphql`
  query {
    aboutImageData: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const AboutSection = props => {
  const classes = useStyles()
  const theme = useTheme()

  const { aboutImageData } = useStaticQuery(getAboutImage)

  return (
    <Box component='section' py={['110px']}>
      <SectionTitle firstPhrase='About' secondPhrase='Us' />
      <Grid container>
        <Grid item xs={12} lg={6} className={classes.graphicSubSection}>
          <Box border={4} borderColor='primary.main' width={['600px']}>
            {/* <img src={defaultBcg} alt='about us' className={classes.aboutImg} /> */}
            <Img
              fluid={aboutImageData.childImageSharp.fluid}
              alt='about us'
              className={classes.aboutImg}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} className={classes.infoSubSection}>
          <Box width={['600px']}>
            <Typography variant='h3' gutterBottom>
              Explore the Difference
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              soluta facere eius provident expedita? Quia similique, sed ducimus
              aspernatur voluptates vel quasi porro sequi.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              soluta facere eius provident expedita? Quia similique, sed ducimus
              aspernatur voluptates vel quasi porro sequi.
            </Typography>
            <Button variant='contained' color='primary' size='large'>
              Read More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  graphicSubSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '40px',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center'
    }
  },
  infoSubSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '40px',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center'
    }
  },
  aboutImg: {
    transform: 'translate(15px, 15px)'
  }
}))

export default AboutSection

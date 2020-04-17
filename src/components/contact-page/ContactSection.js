import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  FormControl
} from '@material-ui/core'
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

const ContactSection = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box component='section' pt={['130px']} pb={'200px'}>
      <SectionTitle firstPhrase='Contact' secondPhrase='Us' />
      <Grid container justify='center' alignItems='center'>
        <Grid item>
          <form
            className={classes.form}
            action='https://formspree.io/realmohsin@outlook.com'
            method='POST'
          >
            <TextField
              fullWidth
              required
              className={classes.textInput}
              label='Name'
              name='name'
              variant='outlined'
            />
            <TextField
              fullWidth
              required
              className={classes.textInput}
              type='email'
              name='email'
              label='Email'
              variant='outlined'
            />
            <TextField
              name='message'
              fullWidth
              variant='outlined'
              className={classes.textInput}
              placeholder='Write your message here...'
              multiline
              rows={6}
              rowsMax={6}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
              fullWidth
            >
              Submit Here
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: '700px',
    marginTop: '25px'
  },
  textInput: {
    marginBottom: '20px'
  }
}))

export default ContactSection

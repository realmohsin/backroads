import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Button, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'

const NotFoundPage = props => {
  return (
    <Layout>
      <SimpleHero>
        <Banner title='404' info='Lorem ipsum delactius insila acersu magnefic'>
          <Button variant='outlined' color='inherit' size='large'>
            <AniLink fade to='/'>
              Go to Home
            </AniLink>
          </Button>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}

export default NotFoundPage

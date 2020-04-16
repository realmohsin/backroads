import React from 'react'
import { Link } from 'gatsby'
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
            <Link to='/'>Go to Home</Link>
          </Button>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}

export default NotFoundPage

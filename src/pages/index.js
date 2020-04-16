import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Button, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import AboutSection from '../components/home-page/AboutSection'
import ServiceSection from '../components/home-page/ServiceSection'

const HomePage = props => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title='Continue Exploring'
          info='Lorem ipsum delactius insila acersu magnefic'
        >
          <Button variant='outlined' color='inherit' size='large'>
            <Link to='/tours'>Explore Tours</Link>
          </Button>
        </Banner>
      </SimpleHero>
      <AboutSection />
      <ServiceSection />
    </Layout>
  )
}

export default HomePage

import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Button, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import AboutSection from '../components/home-page/AboutSection'
import ServiceSection from '../components/home-page/ServiceSection'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'

const HomePage = ({ data }) => {
  return (
    <Layout>
      <Hero home img={data.heroBg.childImageSharp.fluid}>
        <Banner
          title='Continue Exploring'
          info='Lorem ipsum delactius insila acersu magnefic'
        >
          <Button variant='outlined' color='inherit' size='large'>
            <Link to='/tours'>Explore Tours</Link>
          </Button>
        </Banner>
      </Hero>
      <AboutSection />
      <ServiceSection />
    </Layout>
  )
}

export const query = graphql`
  query {
    heroBg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default HomePage

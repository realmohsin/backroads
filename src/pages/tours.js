import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title='Tours'
          info='Lorem ipsum delactius insila acersu magnefic'
        ></Banner>
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ContactPage

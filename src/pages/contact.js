import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ContactSection from '../components/contact-page/ContactSection'
import { graphql } from 'gatsby'

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.connectBcg.childImageSharp.fluid}>
        <Banner
          title='Contact'
          info='Lorem ipsum delactius insila acersu magnefic'
        ></Banner>
      </Hero>
      <ContactSection />
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ContactPage

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.blogBcg.childImageSharp.fluid}>
        <Banner
          title='Blog'
          info='Lorem ipsum delactius insila acersu magnefic'
        ></Banner>
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default BlogPage

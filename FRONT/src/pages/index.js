import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'

export default ({ data }) => {
  const {
    allStrapiProjects: { node: projects },
  } = data
  console.log(data)
  return (
    <Layout>
      <Hero />
      <Skills />
      <Jobs />
      <Projects projects={projects} title="Wybrane Projekty" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

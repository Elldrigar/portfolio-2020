import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import SEO from '../components/SEO'

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projekty" description="Projekty z Portfolio Artur Gawron" />
      <section className="project-page">
        <Projects projects={projects} title="Wszystkie Projekty" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage

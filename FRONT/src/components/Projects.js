import React from 'react'
import Title from './Title'
import Project from './Project'
import { Link } from 'gatsby'
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section project">
      <Title title={title} />
    </section>
  )
}

export default Projects

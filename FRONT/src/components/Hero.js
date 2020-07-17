import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import SocialLinks from '../constants/socialLinks'

const query = graphql`
  {
    file(relativePath: { eq: "ja_hero_img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>
              Cześć!
              <br />
              Jestem Artur
            </h1>
            <h4>Junior Front-End Developer</h4>
            <Link to="/contact" className="btn">
              Kontakt
            </Link>
            <a
              className="btn"
              href="https://gawron.me/artur_gawron_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              pobierz CV
            </a>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero

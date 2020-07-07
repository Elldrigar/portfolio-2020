import React from 'react'
import Title from './Title'
import skills from '../constants/skills'

const Skills = () => {
  return (
    <section className="section bg-grey">
      <Title title="Umiejętności" />
      <div className="section-center skills-center">
        {skills.map(skill => {
          const { id, title, skills, text } = skill
          return (
            <article key={id} className="skill">
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{skills}</p>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills

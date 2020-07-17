import React from 'react'
import {
  FaSketch,
  FaAndroid,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from 'react-icons/fa'
import { RiGatsbyLine } from 'react-icons/ri'
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiSass,
  DiMongodb,
  DiNodejsSmall,
  DiNpm,
  DiTrello,
  DiStackoverflow,
  DiTerminal,
} from 'react-icons/di'
export default [
  {
    id: 1,
    icon: <FaHtml5 className="skill-icon" />,
    title: 'Front-End',
    skills: [
      <DiCss3 className="skill-icon" />,
      <DiHtml5 className="skill-icon" />,
      <DiJavascript1 className="skill-icon" />,
      <DiReact className="skill-icon" />,
      <DiSass className="skill-icon" />,
    ],
    text: `HTML, CSS, Sass/Scss, JavaScript-ES6+, RESTful-API, React, GraphQL`,
  },
  {
    id: 2,
    icon: <FaSketch className="skill-icon" />,
    title: 'Back-End',
    skills: [
      <DiNodejsSmall className="skill-icon" />,
      <DiMongodb className="skill-icon" />,
    ],
    text: `Node.js - Express, MongoDB, Strapi`,
  },
  {
    id: 3,
    icon: <FaAndroid className="skill-icon" />,
    title: 'Narzędzia i Inne',
    skills: [
      <FaGithub className="skill-icon" />,
      <FaGitAlt className="skill-icon" />,
      <DiNpm className="skill-icon" />,
      <DiTerminal className="skill-icon" />,
      <FaFigma className="skill-icon" />,
      <DiTrello className="skill-icon" />,
      <DiStackoverflow className="skill-icon" />,
    ],
    text: `Git/Github, NPM, Trello, StackOverflow, Webstorm, Figma`,
  },
  {
    id: 4,
    icon: <FaAndroid className="skill-icon" />,
    title: 'Aktualnie uczę się',
    skills: [
      <DiReact className="skill-icon" />,
      <RiGatsbyLine className="skill-icon" />,
    ],
    text: `React, Gatsby, Typescript`,
  },
]

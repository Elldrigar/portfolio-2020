import React from 'react'
import {
  FaSketch,
  FaAndroid,
  FaHtml5,
  FaGitAlt,
  FaGithub,
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
  DiTerminal
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
      <DiSass className="skill-icon" />,
    ],
    text: `Html, Css, Sass, JavaScript ES6+, Metodyka BEM,`,
  },
  {
    id: 2,
    icon: <FaSketch className="skill-icon" />,
    title: 'Back-End',
    skills: [
      <DiMongodb className="skill-icon" />,
      <DiNodejsSmall className="skill-icon" />,
    ],
    text: `Node.js - Express, MongoDB, stack MERN`,
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
      <DiTrello className="skill-icon" />,
      <DiStackoverflow className="skill-icon" />,
    ],
    text: `Git/Github, NPM, Trello, StackOverflow`,
  },
  {
    id: 4,
    icon: <FaAndroid className="skill-icon" />,
    title: 'Aktualnie uczę się',
    skills: [
      <DiReact className="skill-icon" />,
      <RiGatsbyLine className="skill-icon" />,
    ],
    text: `React.js oraz Gatsby.js`,
  },
]

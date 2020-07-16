import React from 'react'
import { Link } from 'gatsby'
const data = [
  {
    id: 1,
    text: 'start',
    url: '/',
  },
  {
    id: 2,
    text: 'o mnie',
    url: '/about/',
  },
  {
    id: 3,
    text: 'projekty',
    url: '/projects/',
  },
  {
    id: 4,
    text: 'blog',
    url: '/blog/',
  },
  {
    id: 5,
    text: 'kontakt',
    url: '/contact/',
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ''}`}>
      {tempLinks}
    </ul>
  )
}

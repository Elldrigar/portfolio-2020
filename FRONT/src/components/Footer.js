import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>Made with <span role="img" aria-label="Love">💙</span> by Artur Gawron</h4>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import Layout from '../components/Layout'

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Zostańmy w kontakcie</h3>
          <form action="https://formspree.io/moqkpevo" method="POST">
            <div className="form-group">
              <input type="text" name="Imię" placeholder="Imię" className="form-control" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="wiadomość"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              Zatwierdź
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact

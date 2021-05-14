import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'

export default function Layout({ children }) {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <InertiaLink href="/" className="nav-item nav-link">Home</InertiaLink>
            <InertiaLink href="/about" className="nav-item nav-link">About</InertiaLink>
            <InertiaLink href="/contact" className="nav-item nav-link">Contact</InertiaLink>
            <InertiaLink href="/inflacao" className="nav-item nav-link">Inflacao</InertiaLink>
          </div>
        </div>
      </nav>

      <article>
        {children}
      </article>
    </main>
  )
  }
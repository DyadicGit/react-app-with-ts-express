import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Ruptela React Test
            </h1>
            <h2 className="subtitle">
              You can do it!
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Header

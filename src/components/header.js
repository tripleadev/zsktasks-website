import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <Link
        to="/"
        style={{
          color: `white`,
          fontWeight: 700,
        }}
      >
        <h1>{siteTitle}</h1>
      </Link>
      <ul className="list">
        <li>
          <Link to="/">Zadania</Link>
        </li>
        <li>
          <Link to="/add">Dodaj</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <Link to="/" className="link">
        {" "}
        {siteTitle}{" "}
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

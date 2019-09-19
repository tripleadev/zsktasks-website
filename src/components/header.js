import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./header.css"

const Header = ({ siteTitle }) => {
  const [isMenuOpened, setMenuOpened] = useState(false)
  return (
    <header>
      <div className="header">
        <Link to="/" className="link">
          {siteTitle}
        </Link>
        <button
          className="menuIcon"
          onClick={() => {
            setMenuOpened(isMenuOpened ? false : true)
          }}
        >
          <div
            className={`bar ${
              isMenuOpened ? "bar--menu-opened" : "bar--menu-closed"
            }`}
          ></div>
        </button>
        <ul
          className={`list ${isMenuOpened ? "list--opened" : "list--closed"}`}
        >
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

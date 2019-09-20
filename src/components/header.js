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
            document.body.style.overflow = isMenuOpened ? "auto" : "hidden"
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
            <Link
              to="/"
              onClick={() => {
                setMenuOpened(isMenuOpened ? false : true)
                document.body.style.overflow = isMenuOpened ? "auto" : "hidden"
              }}
            >
              Zadania
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              onClick={() => {
                setMenuOpened(isMenuOpened ? false : true)
                document.body.style.overflow = isMenuOpened ? "auto" : "hidden"
              }}
            >
              Dodaj
            </Link>
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

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
                document.body.style.overflow = "auto"
              }}
            >
              Zadania
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              Dodaj
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              Harmonogram zeszytu
            </Link>
          </li>
          <li>
            <Link
              to="/duties"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              Dyżurni
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

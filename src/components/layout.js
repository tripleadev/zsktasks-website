/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="zskTasks" />
      <div className="container">
        <main>{children}</main>
        <footer>Copyright © {new Date().getFullYear()} <a href="https://triplea.gq">TripleA</a></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

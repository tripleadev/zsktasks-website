/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from '../utils/theme'

const GlobalStyles = createGlobalStyle`
  html {
    font-family: "Poppins", sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-size: 1.05rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    font-size: 36px;
    color: ${props => props.theme.colors.mainColor};
  }
`

const Container = styled.div`
  margin: 0 auto;
  width: 90vw;
  padding: 1rem;
`

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  margin: 20px;
  font-size: 0.9em;

  ${props => props.theme.mq.mobile} {
    margin: 20px 0;
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header siteTitle="zskTasks" />
      <Container>
        <main>{children}</main>
        <Footer>Copyright © {new Date().getFullYear()} <a href="https://triplea.gq">TripleA</a></Footer>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React, { useState } from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import PropTypes from "prop-types"

const StyledHeader = styled.header`
  background: #28146d;
`

const InnerHeader = styled.div`
  margin: 0 auto;
  width: 90vw;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: white;
  font-weight: 700;
  font-size: 1.9em;
`

const MenuIcon = styled.button`
  width: 35px;
  height: 25px;
  display: inline-block;
  position: relative;
  z-index: 10;

  background: transparent;
  border: none;
  cursor: pointer;
`

const Bar = styled.div`
  display: none;
  width: 100%;
  height: 5px;
  position: absolute;
  background: ${({ isMenuOpened }) => isMenuOpened ? 'transparent' : 'white'};

  left: 0;
  top: 50%;
  transform: translateY(-50%);

  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    width: 100%;
    height: 5px;
    position: absolute;
    background: white;

    content: "";
    left: 0;
  }

  &::before {
    transform: ${({ isMenuOpened }) => isMenuOpened ? 'rotate(45deg)' : ''};
    top: ${({ isMenuOpened }) => isMenuOpened ? '0px' : '-10px'};
    transition: all 0.3s ease-in-out;
  }

  &::after {
    transform: ${({ isMenuOpened }) => isMenuOpened ? 'rotate(-45deg)' : ''};
    top: ${({ isMenuOpened }) => isMenuOpened ? '0px' : '10px'};
    transition: all 0.3s ease-in-out;
  }

  ${(props) => props.theme.mq.medium} {
    display: unset;
  }
`

const List = styled.ul`
  display: flex;

  li {
    color: white;
    list-style-type: none;
    padding: 0.5em;
    font-weight: 600;
    font-size: 1.2em;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ${(props) => props.theme.mq.medium} {
    position: fixed;
    top: 0;
    background-color: #28146d;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-align: center;
    left: ${({ isMenuOpened }) => isMenuOpened ? '0vw' : '100vw'};
  }
`

const Header = ({ siteTitle }) => {
  const [isMenuOpened, setMenuOpened] = useState(false)
  return (
    <StyledHeader>
      <InnerHeader>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
        <MenuIcon
          onClick={() => {
            setMenuOpened(!isMenuOpened)
            document.body.style.overflow = isMenuOpened ? "auto" : "hidden"
          }}
        >
          <Bar isMenuOpened={isMenuOpened}/>
        </MenuIcon>
        <List isMenuOpened={isMenuOpened}>
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
          <li>
            <a href="https://www.zsk.poznan.pl/2021plany/technikum/plany/o17.html">
              Plan Lekcji
            </a>
          </li>
          <li>
            <a href="https://spanko.zsktasks.gq">Spanko</a>
          </li>
        </List>
      </InnerHeader>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

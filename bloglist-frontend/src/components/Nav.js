import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
  display: flex;
  background: gray;
  width: 100%;
`

const NavLink = styled(Link)`
  padding: 10px;
  text-decoration: none;

  :hover,
  :visited {
    color: white;
  }
`

const Nav = () => {
  return (
    <NavContainer>
      <NavLink to='/users'>User</NavLink>
      <NavLink to='/'>Home</NavLink>
    </NavContainer>
  )
}

export default Nav

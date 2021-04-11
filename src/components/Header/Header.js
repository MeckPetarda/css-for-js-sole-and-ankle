import React from "react"
import styled from "styled-components/macro"

import { COLORS, WEIGHTS } from "../../constants"
import Logo from "../Logo"
import SuperHeader from "../SuperHeader"

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  )
}

const MainHeader = styled.div`
  position: relative;
  display: flex;
  padding: 20px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`

const LogoWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 32px;
  height: 100%;
  top: 0;
  left: 0;
`

const Nav = styled.nav`
  display: flex;
  width: 100%;
  gap: 48px;
  justify-content: center;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header

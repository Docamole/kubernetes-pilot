import React from 'react'

import { Navbar, Alignment } from '@blueprintjs/core'

import Namespaces from '../../components/Namespaces'

const NavBar = () => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>Pilot</Navbar.Heading>
      <Navbar.Divider />
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <Namespaces />
    </Navbar.Group>
  </Navbar>
)

export default NavBar

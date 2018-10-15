import React from 'react'

import { Navbar, Alignment } from '@blueprintjs/core'

import NamespaceSelect from '../../components/NamespaceSelect'

const NavBar = () => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>Pilot</Navbar.Heading>
      <Navbar.Divider />
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <NamespaceSelect />
    </Navbar.Group>
  </Navbar>
)

export default NavBar

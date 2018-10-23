import React from 'react'

import { Menu } from '@blueprintjs/core'

import NamespaceSelect from '../../components/NamespaceSelect'

const Navigation = () => (
  <Menu>
    <Menu.Item labelElement={<NamespaceSelect />} />
    <Menu.Item text="Overview" active />
  </Menu>
)

export default Navigation

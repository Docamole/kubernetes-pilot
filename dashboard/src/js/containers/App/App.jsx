import React from 'react'

import ApiProvider from '../../components/ApiProvider'
import LayoutManager from '../../components/LayoutManager'

import Navigation from './Navigation'

import '../../../sass/blueprint-js.scss'

const COMPONENTS = {
  navigation: {
    component: <Navigation />
  },
  content: {
    component: <div>Content</div>
  },
  console: {
    component: <div>Console</div>
  }
}

const LAYOUT = {
  direction: 'row',
  first: 'navigation',
  second: {
    direction: 'column',
    first: 'content',
    second: 'console',
    splitPercentage: 75
  },
  splitPercentage: 20
}

const App = () => (
  <ApiProvider>
    <LayoutManager components={COMPONENTS} layout={LAYOUT} />
  </ApiProvider>
)

export default App

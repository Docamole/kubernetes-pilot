import React from 'react'
import PropTypes from 'prop-types'
import { Mosaic } from 'react-mosaic-component'

const LayoutManager = ({ layout, components }) => (
  <Mosaic
    className="mosaic-blueprint-theme bp3-dark"
    initialValue={layout}
    renderTile={id => components[id].component}
  />
)

LayoutManager.propTypes = {
  layout: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.object
    ])
  ).isRequired,
  components: PropTypes.objectOf(
    PropTypes.shape({
      component: PropTypes.element
    })
  ).isRequired
}

export default LayoutManager

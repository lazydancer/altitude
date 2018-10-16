import React from 'react';
import PropTypes from 'prop-types'

const Info = ({ selectedEvent }) => (
  <div className="info">
    <p>ALmots </p>
  </div>
)

Info.propTypes = {
  selectedEvent: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default Info
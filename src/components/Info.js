import React from 'react';
import PropTypes from 'prop-types'

const Info = ({selectedEvent}) => {

  if(!selectedEvent){
    return (
      <div className="info">
          <p>None Selected !</p>
      </div>
    )
  }
  return (
    <div className="info">
        <p>Hello !</p>
        <p>{selectedEvent.id}</p>
        <p>{selectedEvent.title}</p>
    </div>
  )
  

}

Info.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string
}

export default Info
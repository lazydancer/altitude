import React from 'react';
import PropTypes from 'prop-types'


const Info = ({ selectedEvent, updateEvent}) => {

  if(!selectedEvent){
    return (
      <div className="info">
          <p>None Selected !</p>
      </div>
    )
  }

  let input

  return (
    <div className="info">
        <p>Info !</p>
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            updateEvent(selectedEvent.id, input.value, selectedEvent.start, selectedEvent.end)
            input.value = ''
          }}>
          <input ref={node => input = node} />
          <button type="submit">
            Update Title
          </button>
        </form>
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
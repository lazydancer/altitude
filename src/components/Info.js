import React from 'react';
import PropTypes from 'prop-types'
import { Dialog, Autocomplete, TextInput } from 'evergreen-ui'

const Info = ({ selectedEvent, projectList, updateEvent, closeEvent}) => {

  if(!selectedEvent){
    return (
      <div className="info">
          <p>None Selected !</p>
      </div>
    )
  }

  let input = selectedEvent.title

  return (
    <Dialog
      isShown={selectedEvent !== null}
      title="Edit"
      onCloseComplete={() => {
        updateEvent(selectedEvent.id, input, selectedEvent.start, selectedEvent.end)
        closeEvent()
      }}
    >
    
      <Autocomplete
        title="Projects"
        onChange={changedItem => console.log(changedItem)}
        items={projectList}
      >
        {(props) => {
          const { getInputProps, getRef, openMenu } = props
          return (
            <TextInput
              placeholder="Enter Project"
              value={input}
              innerRef={getRef}
              {...getInputProps({
                onFocus: () => {
                  openMenu()
                }
              })}
            />
          )
        }}
      </Autocomplete>
    <p>{selectedEvent.id}</p>

    </Dialog>
  )

  /*

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
        <Button>I am using Evergreen!</Button>
    </div>
  )
  
  */


}

Info.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string
}

export default Info
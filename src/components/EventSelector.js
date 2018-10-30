import React from 'react';
import {  Table, Dialog } from 'evergreen-ui'

const EventSelector = ({ eventDialog, projectList, updateEvent }) => {

  if(!eventDialog.showing){
    return (
      <div className="EventSelector">
      </div>
    )
  }

  return (
     <Dialog
        isShown={eventDialog.showing}
      >
        <Table>
  <Table.Body height={240}>
    {projectList.map(project => (
      <Table.Row key={project.id} isSelectable 
                 onSelect={() => updateEvent(eventDialog.id, project.title, eventDialog.start, eventDialog.end)}>
        <Table.TextCell>{project.title}</Table.TextCell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
      </Dialog>

  )
}


export default EventSelector
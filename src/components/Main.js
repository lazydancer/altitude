import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VisibleCalendar from '../containers/VisibleCalendar'
import Project from './Project'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={VisibleCalendar}/>
      <Route path='/project/:projectName' component={Project} />
    </Switch>
  </main>
)

export default Main
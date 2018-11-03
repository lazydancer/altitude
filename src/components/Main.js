import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VisibleCalendar from '../containers/VisibleCalendar'
import VisibleProject from '../containers/VisibleProject'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={VisibleCalendar}/>
      <Route path='/project/:projectKey' component={VisibleProject} />
    </Switch>
  </main>
)

export default Main
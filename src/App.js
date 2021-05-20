import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './containers/home'
import Calorie from './containers/calorie'
import Logbook from './containers/logbook'

import SideBar from './components/SideBar'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <Router>
        <SideBar />
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/calories'>
            <Calorie />
          </Route>
          <Route exact path='/logbook'>
            <Logbook />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

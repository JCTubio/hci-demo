import React from 'react'
import './App.scss'

import Home from './containers/home'
import Calorie from './containers/calorie'

import SideBar from './components/SideBar'

function App() {

  const router = () => {
    switch (window.location.pathname) {
      case '/home':
        return <Home />
      case '/calories':
        return <Calorie />
      default:
        return <Home />
    }
  }

  return (
    <div className='App'>
      <SideBar />
      {router()}
    </div>
  )
}

export default App

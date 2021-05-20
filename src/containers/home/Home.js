import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import backgroundImg from '../../images/background.jpg'
import orangeImg from '../../images/orange.png'

import './styles.scss'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleScan = () => {
    setShowModal(true)
    setTimeout(() => {
      setShouldRedirect('/calories')
    }, 1820)
  }

  const handleCalorieTracker = () => {
    setShouldRedirect('/logbook')
    setShowModal(true)
  }

  return (
    <div className='background'>
      <img className='background-img' src={backgroundImg} alt='background' />
      <button className='round-button' onClick={handleScan}>
        SCAN
      </button>
      <button className='round-button' onClick={handleCalorieTracker}>Quick calorie tracker</button>
      {showModal ? (
        <div className='modal'>
          <div className='modal-content'>
            <img src={orangeImg} alt='orange' />
            <div className='scanning' />
            {shouldRedirect ? <Redirect to={shouldRedirect} /> : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Home

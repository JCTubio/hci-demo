import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

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
      <button className='round-button' onClick={handleScan}>
        SCAN
        <FontAwesomeIcon style={{marginTop: '15px'}} size='2x' icon={faCamera} />
      </button>
      <button className='round-button' onClick={handleCalorieTracker}>
        Quick calorie tracker <FontAwesomeIcon style={{marginTop: '15px'}} size='2x' icon={faCalendarAlt} />
      </button>
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

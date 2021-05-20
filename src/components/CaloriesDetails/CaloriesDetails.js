import React from 'react'

import './styles.scss'

const CaloriesDetails = (props) => {
  const { meals, handleClick, disabled } = props

  const { breakfast, snack1, lunch, snack2, dinner } = meals

  const formatClickData = (eve) => {
    handleClick({ [eve.target.id]: 345 })
  }

  return (
    <div className='menu'>
      <div style={disabled ? { pointerEvents: 'none' } : null} className='row'>
        <p className='text'>Breakfast</p>
        {disabled ? (
          <p className='button'>{breakfast || '0'} calories</p>
        ) : (
          <button
            onClick={formatClickData}
            id='breakfast'
            value={breakfast}
            className='button'
          >
            {breakfast || '+'} calories
          </button>
        )}
      </div>
      <div style={disabled ? { pointerEvents: 'none'} : null} className='row'>
        <p className='text'>Snack</p>
        {disabled ? (
          <p className='button'>{breakfast || '0'} calories</p>
        ) : (
          <button
            onClick={formatClickData}
            id='snack1'
            value={snack1}
            className='button'
          >
            {snack1 || '+'} calories
          </button>
        )}
      </div>
      <div style={disabled ? { pointerEvents: 'none'} : null} className='row'>
        <p className='text'>Lunch</p>
        {disabled ? (
          <p className='button'>{breakfast || '0'} calories</p>
        ) : (
          <button
            onClick={formatClickData}
            id='lunch'
            value={lunch}
            className='button'
          >
            {lunch || '+'} calories
          </button>
        )}
      </div>
      <div style={disabled ? { pointerEvents: 'none'} : null} className='row'>
        <p className='text'>Snack</p>
        {disabled ? (
          <p className='button'>{breakfast || '0'} calories</p>
        ) : (
          <button
            onClick={formatClickData}
            id='snack2'
            value={snack2}
            className='button'
          >
            {snack2 || '+'} calories
          </button>
        )}
      </div>
      <div style={disabled ? { pointerEvents: 'none'} : null} className='row'>
        <p className='text'>Dinner</p>
        {disabled ? (
          <p className='button'>{breakfast || '0'} calories</p>
        ) : (
          <button
            onClick={formatClickData}
            id='dinner'
            value={dinner}
            className='button'
          >
            {dinner || '+'} calories
          </button>
        )}
      </div>
    </div>
  )
}

export default CaloriesDetails

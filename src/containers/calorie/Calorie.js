import React from 'react'

import orangeImg from '../../images/orange.png'
import backgroundImg from '../../images/background.jpg'

import './styles.scss'

const Calorie = () => {
  return (
    <div className='background'>
      <img className='background-img' src={backgroundImg} alt='background' />
      <div className='content'>
        <div className='menu'>
          <div className='row'>
            <p className='text'>Breakfast</p>
            <button className='button'>345 calories</button>
          </div>
          <div className='row selected'>
            <p className='text selected'>Snack</p>
            <button className='button selected'>+</button>
          </div>
          <div className='row'>
            <p className='text'>Lunch</p>
            <button className='button'>+</button>
          </div>
          <div className='row'>
            <p className='text'>Snack</p>
            <button className='button'>+</button>
          </div>
          <div className='row'>
            <p className='text'>Dinner</p>
            <button className='button'>+</button>
          </div>
        </div>

        <div className='food'>
          <img src={orangeImg} alt='scanned food' />
          <p className='food-calories-count'>62 calories</p>
        </div>

        <div className='nutritional-table'>
          <p className='title'>Orange</p>
          <p className='row'>Calories: 47</p>
          <p className='row'>Water: 87%</p>
          <p className='row'>Protein: 0.9g</p>
          <p className='row'>Carbs: 11.8g</p>
          <p className='row'>Sugar: 9.4g</p>
          <p className='row'>Fiber: 2.4g</p>
          <p className='row'>Fat: 0.1g</p>
        </div>
      </div>
    </div>
  )
}

export default Calorie

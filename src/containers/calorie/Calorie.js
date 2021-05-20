import React, { useState } from 'react'

import CaloriesDetails from '../../components/CaloriesDetails/CaloriesDetails'

import orangeImg from '../../images/orange.png'
import backgroundImg from '../../images/background.jpg'

import './styles.scss'

const Calorie = () => {
  const [meals, setMeals] = useState({})

  const handleClick = (meal) => {
    const mealsCopy = Object.assign({}, meals, meal)
    setMeals(mealsCopy)
  }

  return (
    <div className='background'>
      <img className='background-img' src={backgroundImg} alt='background' />
      <div className='content'>
        <div className='meals-container'>
          <CaloriesDetails meals={meals} handleClick={handleClick} />
        </div>

        <div className='food'>
          <img src={orangeImg} alt='scanned food' />
          <p className='food-calories-count'>345 calories</p>
        </div>

        <div className='nutritional-table'>
          <p className='title'>Orange</p>
          <p className='row'>Calories: 345</p>
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

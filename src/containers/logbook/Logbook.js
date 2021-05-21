import React, { useState } from 'react'
import Calendar from 'react-calendar'

import CaloriesDetails from '../../components/CaloriesDetails/CaloriesDetails'

import { daysOfTheWeek } from '../../constants/Moment.js'

import 'react-calendar/dist/Calendar.css'
import './styles.scss'

const Logbook = () => {
  const [value, onChange] = useState(new Date())

  const meals = {
    breakfast: 345,
    snack1: 20,
    lunch: 810,
    snack2: 46,
    dinner: 185
  }
  console.log(value)
  return (
    <div className='container'>
      <div className='calendar-container'>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className='log' >
        <h1>{`${daysOfTheWeek[value.getMonth()]} ${value.getDate()}`}</h1>
       <CaloriesDetails meals={meals} disabled />
      </div>
    </div>
  )
}

export default Logbook

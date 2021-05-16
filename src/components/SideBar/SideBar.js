import React from 'react'

import profileImage from '../../images/profile.jpg'

import './styles.scss'

const SideBar = () => {
  return (
    <div className="nav-bar" >
      <div className="img-container">
        <img className="profile-img" src={profileImage} alt="profile" />
      </div>
      <div className="links">
        <a className="link" href='/calories' >Calories</a>
        <a className="link" href='/ingredients' >Ingredients</a>
        <a className="link" href='/meals' >Meals</a>
        <a className="link" href='/goals' >Goals</a>
      </div>
    </div>
  )
}

export default SideBar

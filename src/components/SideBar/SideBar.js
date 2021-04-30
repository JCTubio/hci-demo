import React from 'react'

import profileImage from '../../images/deal-with-it-profile.png'

import './styles.scss'

const SideBar = () => {
  return (
    <div className="nav-bar" >
      <div className="img-container">
        <img className="profile-img" src={profileImage} alt="profile" />
      </div>
      <div className="links">
        <a className="link" >Calories</a>
        <a className="link" >Ingredients</a>
        <a className="link" >Meals</a>
        <a className="link" >Goals</a>
      </div>
    </div>
  )
}

export default SideBar

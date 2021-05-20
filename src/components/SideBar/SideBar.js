import React from 'react'
import {
  Link,
} from "react-router-dom";

import profileImage from '../../images/profile.jpg'

import './styles.scss'

const SideBar = () => {
  return (
    <div className="nav-bar" >
      <div className="img-container">
        <img className="profile-img" src={profileImage} alt="profile" />
      </div>
      <div className="links">
        <Link className="link" to='/home' >Home</Link>
        <Link className="link" to='/calories' >Calories</Link>
        <Link className="link" to='/ingredients' >Ingredients</Link>
        <Link className="link" to='/meals' >Meals</Link>
        <Link className="link" to='/logbook' >Log</Link>
        <Link className="link" to='/goals' >Goals</Link>
      </div>
    </div>
  )
}

export default SideBar

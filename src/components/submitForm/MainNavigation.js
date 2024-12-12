import React from 'react'
import { NavLink } from 'react-router-dom'


const MainNavigation = () => {
  return (
    <ul>
       <NavLink to='/' className={({isActive})=> (isActive? 'active': undefined)}>Home</NavLink> 
       <NavLink to='/employs' className={({isActive})=> (isActive? 'active': undefined)}>Employ List</NavLink> 
    </ul>
  )
}

export default MainNavigation
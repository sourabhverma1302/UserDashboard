import React from 'react';
import SideBar from '../SideBar/SideBar';
import Experience from '../Experience/Experience';
import './UserInfo.css'

const UserInfo = () => {
  return (
    <div className='sitecontent'>
    <div className='container'>
    <h1>Profile</h1>
    <div className='usercontent'>
    <SideBar/>
    <Experience/>
    </div>
    </div>
    </div>
  )
}

export default UserInfo
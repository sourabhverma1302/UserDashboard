import React from 'react';
import SideBar from '../components/SideBar/SideBar';
import Experience from '../components/Experience/Experience';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import RDownload from '../components/ResumeDownload/RDownload';
import './Main.css';

const Main = () => {
    const show=useSelector(state=>state.ShowOrNot.mainbar);
  return (
    <div className='container'>
    <div className='main'>
    <SideBar/>
    {show === 'experience'?<Experience/>:null}
    {show === 'download'?<RDownload/>:null}
    </div>
    </div>
  )
}

export default Main
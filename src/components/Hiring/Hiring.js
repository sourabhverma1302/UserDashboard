import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Hiring.css';
import myimage from '../../assets/Frame 37030.svg';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import Timeline from '@mui/lab/Timeline';
import hiringdata from './HiringData';
import { useDispatch } from 'react-redux';
import { showornot } from '../../slices/SetShow';



const Hiring = () => {
  const dispatch=useDispatch();
  return (
    <div className='container'>
    <div className='hiringdetails'>
    <div className='hiring'>
    <div className='firstsection'>
    <div className='process'>
    <h1>Hiring Process in Details</h1>
    <CloseIcon fontSize='large' onClick={()=>{dispatch(showornot(false))}}/>
    </div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:10}}><img src={myimage} alt="" height={200} width={200} className='imagestyle' /></div>
    <div className='simple_hiring'>
    <h1>Get Job with our Simplest Hiring Process</h1>
    <p>We provide you a very user Friendly process so that no Employee & Employer waste to much time in Hiring Process, Our Simplest Process Will Work according to you.</p>
    </div>
    </div>
    </div>
    <div className='timelinedata'>
    <Timeline position="left">
    {hiringdata.map((item,index)=>{
      return(
        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className='timelinedot'>{item.id}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      )
    })}
    </Timeline>
    <div style={{marginRight:100}}>
    {hiringdata.map((item,index)=>{
      return(
        <div className='hiringsteps'>
        <h1>{item.name}</h1>
        <p>{item.details}</p>
        </div>
        )
      })}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Hiring
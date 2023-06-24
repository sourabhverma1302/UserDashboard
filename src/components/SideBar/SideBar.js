import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './SideBar.css';
import { useDispatch } from 'react-redux';
import { showmainbar } from '../../slices/SetShow';

const SideBar = () => {
  const[color,setcolor]=useState(false);
  const dispatch=useDispatch();
  console.log(color);
  return (
    <div className='sidebar-container'>
    <div className='sidebar'>
    <div className='scrolllist'>
    <div className='userdetails'>
    <img src="https://fastly.picsum.photos/id/202/200/200.jpg?hmac=eGzhW5P2k0gzjc76Tk5T9lOfvn30h3YHuw5jGnBUY4Y" alt="" className='userimage'/>
    <h1 className='username'>Sourabh Verma</h1>
    <h1 className='username'>6284276329</h1>
    <div className='userskills'>
        <div>UI/UX</div>
        <div>Perks</div>
        <div>Canteen</div>
        <div>Javascript</div>
    </div>
    <div className='personaldetails'>Update Personal Details &gt;</div>
    </div>
    <div className='infolist'>
    <List component="nav" aria-label="mailbox folders">
    <Divider variant='middle' />
      <ListItem className='listitems' button onClick={()=>{setcolor(true)}}>
        <h3>Build Resume With Recruitr</h3>
        <p>Update these details for better chances of selection,
        These Information can be view by Hiring Teams.</p>
      </ListItem>
      <Divider variant='middle' />
      <ListItem className='listitemsnew' button onClick={()=>dispatch(showmainbar('experience'))}>
      <div>
      <h3>Work Experience and Skills</h3>
      <p>Add all your Internships, Work Details...</p>
      </div>
      <div>
      <AddCircleOutlineIcon className='fontstyle'/>
      </div>
      </ListItem>
      <Divider variant='middle' />
      <ListItem className='listitemsnew' button>
      <div>
      <h3>Qualifications</h3>
      <p>Highlight your Education in the eye of recruiters...</p>
      </div>
      <AddCircleOutlineIcon className='fontstyle'/>
      </ListItem>
      <Divider light variant='middle' />
      <ListItem className='listitemsnew' button>
      <div>
      <h3>Highlights, Sports...</h3>
      <p>Show your Highlights & Sports etc to recruiting te...</p>
      </div>
      <AddCircleOutlineIcon className='fontstyle'/>
      </ListItem>
      <Divider light variant='middle'/>
      <ListItem button className='listitemsnew'>
      <div>
      <h3>Recommendations</h3>
      <p>Provide Recommendations, get Recommendation...</p>
      </div>
      <AddCircleOutlineIcon className='fontstyle'/>
      </ListItem>
      <Divider light variant='middle'/>
      <ListItem button className='listitemsnew' onClick={()=>dispatch(showmainbar('download'))}>
      <div>
      <h3>Upload Video Resume</h3>
      <p>Now share your details in video form to Employer...</p>
      </div>
      <AddCircleOutlineIcon className='fontstyle'/>
      </ListItem>
    </List>
    </div>
    </div>
    </div>
    </div>
  )
}

export default SideBar
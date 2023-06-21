import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Divider } from '@mui/material';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import './Navbar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
export default function Navbar() {
  return (
    <header className='siteheader'>
    <div className='container'>
    <div className='navbar'>
      <div style={{display:'flex',flexDirection:'column',width:105}}>
          <h2 className='recruitr'>Recruitr</h2>
          <p className='gatewaytosuccess'>Your gateway to success!</p>
      </div>
      <div className='searchbar'>
      <input type="text" placeholder='Search Jobs...' />
      <SearchIcon className='searchicon'/>
      </div>
      <main className='dashboardsections'>
      <div className='firstdashboard'>
      <GridViewIcon/>
      <p>DashBoard</p>
      </div>
      <div className='firstdashboard'>
      <BusinessCenterIcon/>
      <p>Find Jobs</p>
      </div>
      <div className='firstdashboard'>
      <TaskAltIcon/>
      <p>Applied Jobs</p>
      </div>
      </main>
      <Divider orientation="vertical" variant="middle" flexItem style={{marginLeft:40}} />
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',gap:20,width:80,padding:10}}>
      <TextsmsRoundedIcon/>
      <NotificationAddOutlinedIcon/>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div style={{marginLeft:10}}>
      <PopupState variant="popover" popupId="demo-popup-menu">
    {(popupState) => (
      <React.Fragment>
        <Button variant="contained" {...bindTrigger(popupState)}>
        <img src="https://fastly.picsum.photos/id/965/200/200.jpg?hmac=OalaXaaPbpRZbMwF3uJMUdZIpUmyqse0anUnQcbStrM" alt="" height={20} width={20} style={{borderRadius:10,marginRight:5}} />
          Sourabh
          <ArrowDropDownIcon/>
        </Button>
        <Menu {...bindMenu(popupState)} className='loginmenu'>
          <MenuItem onClick={popupState.close} className='loginmenuitem'><PermIdentityOutlinedIcon/>&nbsp; Profile</MenuItem>
          <MenuItem onClick={popupState.close} className='loginmenuitem'><EditOutlinedIcon/>&nbsp; Update Job Preference</MenuItem>
          <MenuItem onClick={popupState.close} className='loginmenuitem'><NoteAddOutlinedIcon/>&nbsp;&nbsp;Logout</MenuItem>
          <MenuItem onClick={popupState.close} className='loginmenuitem'><StarOutlinedIcon style={{color:'yellow'}}/>&nbsp;&nbsp;Subscription Details</MenuItem>
          <MenuItem onClick={popupState.close} className='loginmenuitem'>&nbsp;<PersonAddAltOutlinedIcon/>&nbsp;&nbsp;Add User</MenuItem>
        </Menu>
      </React.Fragment>
    )}
  </PopupState>
      </div>
    </div>
    </div>
    </header>
  );
}

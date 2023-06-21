import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Divider } from '@mui/material';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
// import MenuItem from '@mui/material/MenuItem';
// import EditIcon from '@mui/icons-material/Edit';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';


import './Navbar.css'

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
      <Button
      id="demo-customized-button"
      aria-controls={'demo-customized-menu'}
      aria-haspopup="true"
      aria-expanded={'true'}
      // variant="contained"
      disableElevation
      endIcon={<KeyboardArrowDownIcon />}
      style={{backgroundColor:'#DFE6EB'}}
      >
      <img src="" alt="" srcset="" height={30} width={30} style={{borderRadius:15,marginRight:10}} />
        Options
      </Button>
      <div
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
      >
      </div>
    </div>
    </div>
    </div>
    </header>
  );
}

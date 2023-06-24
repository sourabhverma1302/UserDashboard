
import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
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
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import Refer from '../ReferFriends/Refer';
import { useDispatch } from 'react-redux';
import { showornot } from '../../slices/SetShow';
import Hiring from '../Hiring/Hiring';
import JobPreference from '../JobPreference/JobPreference';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function Navbar() {
  const [refer, setRefer] = useState(false);
  const [hiring, sethiring] = useState(false);
  const [jobpref, setjobpref] = useState(false);
  const show=useSelector(state=>state.ShowOrNot.showornot);
  const dispatch=useDispatch();
  return (
    <>
    <header className='siteheader'>
    <div className='container'>
    <div className='navbar'>
      <div style={{display:'flex',flexDirection:'column',width:105}}>
          <h2 className='recruitr'>Recruitr</h2>
          <p className='gatewaytosuccess'>Your gateway to success!</p>
      </div>
      <Search className='searchjob'>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        // onChange={(e)=>setjob(e.target.value)}
      />
    </Search>
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
          <MenuItem onClick={()=> {popupState.close();setjobpref(true);dispatch(showornot(true))}} className='loginmenuitem'><EditOutlinedIcon/>&nbsp; Update Job Preference</MenuItem>
          <MenuItem onClick={()=> {popupState.close();sethiring(true);dispatch(showornot(true))}} className='loginmenuitem'><TableRowsOutlinedIcon/>&nbsp;&nbsp;Hiring Process Detail</MenuItem>
          <MenuItem onClick={popupState.close} className='loginmenuitem'><StarOutlinedIcon style={{color:'yellow'}}/>&nbsp;&nbsp;Subscription Details</MenuItem>
          <MenuItem onClick={()=> {popupState.close();setRefer(true);dispatch(showornot(true))}} className='loginmenuitem'>&nbsp;<PersonAddAltOutlinedIcon/>&nbsp;&nbsp;Refer Friendr</MenuItem>
          <MenuItem onClick={popupState.close} className='loginmenuitem'><NoteAddOutlinedIcon/>&nbsp;&nbsp;Logout</MenuItem>
        </Menu>
      </React.Fragment>
    )}
  </PopupState>
      </div>
    </div>
    </div>
    </header>
    {refer && show? <Refer/>:''}
    {hiring && show? <Hiring/>:''}
    {jobpref && show? <JobPreference/>:''}
    {}
    </>
  );
}

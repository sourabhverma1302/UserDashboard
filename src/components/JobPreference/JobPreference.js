import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import data from './JobPrefData';


import './JobPreference.css';

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

const JobPreference = () => {
  const[checked,setchecked]=useState(null);
  const[job,setjob]=useState('');
  const handlechange=()=>{
    return data.filter((item)=>item.name.toLowerCase().includes(job));
  }
  return (
    <div className='container'>
    <div className='jobpreference'>
    <div className='prefheader'>
    <h1>Your Job Preference</h1>
    <CloseIcon/>
    </div>
    <div className='searchdiv'>
    <Search className='searchjob'>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e)=>setjob(e.target.value)}
    />
  </Search>
    </div>
    <div className='jobtitles'>
    <h1>Popular Job Titles</h1>
    <div>
    <FormGroup>
    {
      handlechange().map((item,index)=>{
        return(
        <div className='checkboxdiv' key={index}>
        <FormControlLabel control={<Checkbox />} name="uiux" className='checkboxstyle' onClick={()=>setchecked(index)} />
        <p style={{fontWeight:checked === index?'bold':'normal'}}>{item.name}</p>
        </div>
        )
      })
    }
    </FormGroup>
    </div>
    </div>
    <div className='preferences'>
    <h1>Your Preferences</h1>
    <div className='all-pref'>
    {
      data.map((item,index)=>{
        return(
          <div className='selected-pref' key={index}>
          <p>{item.name}&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <CloseIcon fontSize='small'/>
          </div>
        )
      })
    }
    </div>
    </div>
    </div>
    </div>
  )
}

export default JobPreference
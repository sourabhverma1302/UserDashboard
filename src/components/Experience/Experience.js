import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



import './Experience.css'

const Experience = ({pageTitle}) => {
  return (
    <div className='container'>
    <div className='experience'>
    <h1 className='experience-heading'>Add Experience</h1>
    <div className='title_companyname'>
    <div>
    <h1>Job Title</h1>
    <input type="text" className='textfield' placeholder='Example:Product Manager' />
    </div>
    <div>
    <h1>Company Name</h1>
    <input type="text" className='textfield' placeholder='Example:Google' />
    </div>
    </div>
    <div className='title_companyname'>
    <div>
    <h1>Employment Type</h1>
    <FormControl className='dropdown'>
        <InputLabel id="demo-simple-select-label">Employment Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Employment Type"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div>
    <h1>Working Status</h1>
    <FormControl className='dropdown'>
        <InputLabel id="demo-simple-select-label">Working Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Working Status"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
    </div>
    <div className='title_companyname'>
    <div>
    <h1>Job Title</h1>
    <input type="text" className='textfield' placeholder='Example:Product Manager' />
    </div>
    <div>
    <h1>Company Name</h1>
    <input type="text" className='textfield' placeholder='Example:Google' />
    </div>
    </div>
    <div className='title_companyname'>
    <div>
    <h1>Start Date</h1>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label={'MM / YY'} views={['month', 'year']} className='datepicker'/>
      </DemoContainer>
    </LocalizationProvider>
    </div>
    <div>
    <h1>End Date</h1>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label={'MM / YY'} views={['month', 'year']} className='datepicker'/>
      </DemoContainer>
    </LocalizationProvider>
    </div>
    </div>
    <div className='description'>
    <h1>Description</h1>
    <input type="text" placeholder='Description About You....' />
    </div>
    </div>
    </div>
  )
}

export default Experience
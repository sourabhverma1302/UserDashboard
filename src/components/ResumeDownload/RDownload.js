import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Resume.css'

const RDownload = () => {
    const[selective,setselective]=useState('');
  return (
    <div className='container'>
    <div className='resume'>
    <h1 className='formatselect'>Select Format you want</h1>
    <FormControl>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
  <div style={{display:'flex',gap:20}}>
  <div className='radiobuttons' style={{border:selective==='first'?'0.667702px solid #1363DF':'0.667702px solid #DADADA'}}>
  <img src="https://fastly.picsum.photos/id/111/200/200.jpg?hmac=2DNMKguV-lXKA_jHBWdu9jslPAWBBtS6wWSUdu-WSiI" alt="" height={160} width={120} />
  <FormControlLabel value="first" control={<Radio />} onClick={(e)=>setselective(e.target.value)} style={{marginLeft:13}}/>
  </div>
  <div className='radiobuttons' style={{border:selective==='second'? '0.667702px solid #1363DF':'0.667702px solid #DADADA'}}>
  <img src="https://fastly.picsum.photos/id/111/200/200.jpg?hmac=2DNMKguV-lXKA_jHBWdu9jslPAWBBtS6wWSUdu-WSiI" alt="" height={160} width={120} />
  <FormControlLabel value="second" control={<Radio />} onClick={(e)=>setselective(e.target.value)} style={{marginLeft:13}}/>
  </div>
  </div>
  </RadioGroup>
</FormControl>
    </div>
    </div>
  )
}

export default RDownload
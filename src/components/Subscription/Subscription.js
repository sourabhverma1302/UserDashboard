import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Subscription.css';
import fresherimage from '../../assets/stars 2_layerstyle.svg';
import goldimage from '../../assets/stars 3.png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
const Subscription = () => {
  return (
    <div className='container'>
    <div className='subscription'>
    <div className='subscriptiondetails'>
    <h1>Subscription Details</h1>
    <CloseIcon/>
    </div>
    <div className='existingplan'>
    <h1>Existing Plan</h1>
    <div className='fresher'>
    <div>
    <h1>Recruitr Fresher Candidate</h1>
    <p>Purchased on 27th Mar 2023</p>
    <p>Valid Till 27th June 2023</p>
    </div>
    <div>
    <img src={fresherimage} alt="" />
    </div>
    </div>
    </div>
    <div className='upgradeplan'>
    <h1>Upgrade Your Existing Plan To</h1>
    <div className='goldcandidate'>
    <div className='candidate'>
    <FormControl>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />}/>
  </RadioGroup>
</FormControl>
    <div style={{paddingRight:51}}>
    <h1>Recruitr Gold Candidate</h1>
    <p>₹200 ₹400&nbsp;&nbsp;&nbsp;&nbsp;<span>50% OFF</span></p>
    </div>
    <div>
    <img src={goldimage} alt=""/>
    </div>
    </div>
    <Divider variant="middle" style={{backgroundColor:'#FBBC05'}} />
    <div className='getchance'>
    <h1>Get a Chance to Apply Jobs which asking Experience</h1>
    <p>Using our Gold subscription package, one can also Apply to the jobs which asking Experienced Candidates.</p>
    <Stack spacing={2}>
      <Pagination count={3} size="small" />
    </Stack>
    <div className='viewless'>
    <KeyboardArrowUpIcon/>
    <p>View Less</p>
    </div>
    </div>
    </div>
    </div>
    <div className='recruitrdiamondcand'>
    <div className='diamondcand'>
    <FormControl>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />}/>
  </RadioGroup>
</FormControl>
<div>
    <h1>Recruitr Diamond Candidate</h1>
    <p>₹400 ₹800&nbsp;&nbsp;&nbsp;&nbsp;<span>50% OFF</span></p>
    </div>
    <img src={fresherimage} alt="" height={50} width={60} style={{marginLeft:20}} />
    </div>
    <div className='viewless'>
    <KeyboardArrowUpIcon/>
    <p>View Less</p>
    </div>
    </div>
    <div className='upgradesubsdiv'>
    <Button  className='upgradesubs'>Upgrade Subscription</Button>
    </div>
    </div>
    </div>
  )
}

export default Subscription
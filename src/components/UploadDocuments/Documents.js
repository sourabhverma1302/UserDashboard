import React from 'react';
import './Documents.css'
import CloseIcon from '@mui/icons-material/Close';



const Documents = () => {
  return (
    <div className='container'>
    <div className='documents'>
    <div className='uploaddoc'>
    <h1>Documents</h1>
    <CloseIcon/>
    </div>
    <div className='docdetails'>
    <h1>Document Details</h1>
    <p>Upload These Necessary Documents, Company will ask to Upload During Document verification Process.</p>
    </div>
    <div className='parent'>
    <input type="text" className='foreground' />
    <input type="file" className='background'/>
    </div>
    </div>
    </div>
  )
}

export default Documents
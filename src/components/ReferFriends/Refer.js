import React,{useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Reddit from '../../assets/Social platforms logo.svg';
import Slack from '../../assets/Social platforms logo (3).svg';
import Whatsapp from '../../assets/Social platforms logo (2).svg';
import Insta from '../../assets/Social platforms logo (1).svg';
import Facebook from '../../assets/Logo.svg';
import { useDispatch } from 'react-redux';
import { showornot } from '../../slices/SetShow';

import './Refer.css';
import { Button } from '@mui/material';

const Refer = () => {
  const[show,setshow]=useState(false);
    const [inputValue, setInputValue] = useState('');
    const dispatch=useDispatch();
    const handleCopy = () => {
      const inputElement = document.getElementById('outlined-multiline-flexible');
      inputElement.select();
      document.execCommand('copy');
    };
  return (
    <>
    <div className="refer_con">
    <div className='refer'>
    <div className='referfriends'>
    <h1>Refer To Your Friends</h1>
    <CloseIcon fontSize='large' onClick={()=>{dispatch(showornot(false))}}/>
    </div>
    <div className='inputtext'>
    <TextField
    id="outlined-multiline-flexible"
    label="Refer Your Friends"
    multiline
    maxRows={4}
    className='input'
    value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)}
  />
    </div>
    <div className='copybutton'>
    <Button onClick={handleCopy}><ContentCopyIcon/><span>Copy</span></Button>
    </div>
    <div className='socialimages'>
    <div className='imagename'>
    <img src={Reddit} alt="" />
    <p>Reddit</p>
    </div>
    <div className='imagename'>
    <img src={Insta} alt="" />
    <p>Insta</p>
    </div>
    <div className='imagename'>
    <img src={Whatsapp} alt="" />
    <p>Whatsapp</p>
    </div>
    <div className='imagename'>
    <img src={Facebook} alt="" />
    <p>Facebook</p>
    </div>
    <div className='imagename'>
    <img src={Slack} alt="" />
    <p>Slack</p>
    </div>
    </div>
    </div>
    <div className='refer_backdrop'></div>
    </div>
    </>
  )
}

export default Refer
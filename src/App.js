import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import UserInfo from './components/UserInfo/UserInfo';
// import JobPreference from './components/JobPreference/JobPreference';
// import Documents from './components/UploadDocuments/Documents';
// import Hiring from './components/Hiring/Hiring';
// import Subscription from './components/Subscription/Subscription';
import Refer from './components/ReferFriends/Refer';
import './App.css'

const App = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Refer/>
    </div>
    </>
  )
}

export default App
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import UserInfo from './components/UserInfo/UserInfo';
// import JobPreference from './components/JobPreference/JobPreference';
// import Documents from './components/UploadDocuments/Documents';
// import Hiring from './components/Hiring/Hiring';
// import Subscription from './components/Subscription/Subscription';
import './App.css'
import { Provider } from 'react-redux';
import store from './store';
import Main from './Main/Main';

const App = () => {
  return (
    <Provider store={store}>
    <Navbar/>
    <div className='container'>
    <div className='app_content'>
    <Main/>
    </div>
    </div>
    </Provider>
  )
}

export default App
import React, {useEffect} from 'react';
import './App.css';
import {useSelector} from 'react-redux';

// ! component imports
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';

// !redux selects

import {selectUser} from './features/userSlice';

function App() {

  const user = useSelector(selectUser);


  useEffect(() => {
    
  }, []);

  return (
    <div className="app">
      <Header/>
      {
        !user ? <Login />
        :
        <div className='app__body'>
          <Sidebar />
          <Feed />
          {/* widget */}
        </div>
      }
      
    </div>
  );
}

export default App;

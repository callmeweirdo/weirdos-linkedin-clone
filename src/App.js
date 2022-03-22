import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';

// ! component imports
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';

// ! firebase
import {auth} from './firebase';

// !redux selects

import {login, logout, selectUser} from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      }else{
        dispatch(logout());
      }
    })
  },[]);

  return (
    <div className="app">
      <Header/>
      {
        !user ? <Login />
        :
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      }
      
    </div>
  );
}

export default App;

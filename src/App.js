import React from 'react';
import './App.css'


// ! component imports
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app__body'>
        <Sidebar />
        <Feed />
        {/* widget */}
      </div>
    </div>
  );
}

export default App;

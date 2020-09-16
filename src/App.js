import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar.component';
import {useStateValue } from './components/contextApi/StateProvider';
import Login from './components/login/Login';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';
function App() {
  const [{user}, dispatch ] = useStateValue();
  return (
    // BEM naming convention
    <div className="App"> 
      { !user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
      
    </div>
      
  );
}

export default App;

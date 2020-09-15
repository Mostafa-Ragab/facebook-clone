import React from 'react';
import './App.css';
import Header from './header/Header';
import Sidebar from './sidebar/sidebar.component';
function App() {
  return (
    // BEM naming convention
    <div className="App"> 
      
      <Header />
      <div className="app__body">
        <Sidebar />
      {/* feed */}
      {/* widgets */}
    </div>
      </div>
      
  );
}

export default App;

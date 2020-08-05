import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <h1>Hello</h1>
        <h1>World</h1>
      </Sidebar>
    </div>
  );
}

export default App;

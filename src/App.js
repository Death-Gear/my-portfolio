import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar'
import OverView from './components/overview/OverView'

function App() {
  return (
      <div className="App">
          <NavBar/>
          <OverView/>
      </div>
  );
}

export default App;

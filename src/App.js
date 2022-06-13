import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="Missions" element={<Missions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

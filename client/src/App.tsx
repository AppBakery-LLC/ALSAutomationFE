import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// @ts-ignore
import Home from './screens/Home.tsx'
// @ts-ignore
import EnterALS from './screens/ActivityListSheet/EnterALS.tsx'
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/EnterALS' element={<EnterALS/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

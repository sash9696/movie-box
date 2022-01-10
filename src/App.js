import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {

  const user = null;

  return (
    <div className="app">
      {!user  ? <LoginScreen/> : (

          <BrowserRouter>
          <Routes>
            <Route exact path="profile" element={<ProfileScreen />} />
            <Route exact path="/" element={<HomeScreen/>} />
            
          </Routes>
          </BrowserRouter>

      )}
      
      

      
    </div>
  );
}

export default App;

import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';
import { login, selectUser, logout } from './features/userSlice';
import { auth } from './firebase';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const gettingIn = auth.onAuthStateChanged((userAuth) => {
       if(userAuth){
         dispatch(
           login({
             uid: userAuth.uid,
             email: userAuth.email
           })
         )
       }else{
         dispatch(logout());
       }
    })
    return gettingIn;
  }, [dispatch])

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

import React from "react";
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import "./App.css"
import Profile from './components/Profile';
function App() {

  return (
    <UserContextProvider>
      <h1>Understanding Context with MiniContext Project</h1>
      <Login/>
      <Profile /> 
    </UserContextProvider>
  )
}

export default App

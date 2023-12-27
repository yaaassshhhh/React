import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"
function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username : "yash",
  //   password : 124
  // }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Tailwaind</h1>
      <Card userName ="Yash" btnText = "click ME" />
      <Card userName="Krishna" btnText="Visit Me" />
    </>
  )
}

export default App

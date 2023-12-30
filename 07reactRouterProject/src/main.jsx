import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfo } from './components/Github/Github.jsx'
// const router = createBrowserRouter([
// {
//   path : "/",
//   element : <App />,
//   children : [
//     {
//       path : "",
//       element : <Home />
//     },
//     {
//       path : "about",
//       element : <About />
//     },
//     {
//       path : "/contact",
//       element : <Contact />
//     }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path = "/" element = {<App/>}>

      <Route path ="" element = {<Home/>}></Route>
      <Route path ="about" element = {<About/>}></Route>
      <Route path ="contact" element = {<Contact/>}></Route>
      <Route path ="user/:id" element = {<User/>}></Route>
      <Route
       loader={githubInfo}
       path ="github" 
       element = {<Github/>}></Route>
      

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './cssApp.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import ExcercisePage from './Components/ExcercisePage.jsx'
import Exercises from './Components/Exercises.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' />
      <Route path='/contact' />
      <Route path='/exercises' element={<Exercises/>}/>
      <Route path='/exercises/:id' element={<ExcercisePage />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

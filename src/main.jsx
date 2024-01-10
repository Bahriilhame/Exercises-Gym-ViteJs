import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './cssApp.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import ExcercisePage from './Components/ExcercisePage.jsx'
import Exercises from './Components/Exercises.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/exercises' element={<Exercises/>}/>
      <Route path='/exercises/:id' element={<ExcercisePage />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)

// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Resume from './Resume.jsx'
import Projects from './Projects.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>}/>
      <Route path='/resume' element = {<Resume/>}/>
      <Route path='/projects' element = {<Projects/>}/>
    </Routes>
  </BrowserRouter>
)

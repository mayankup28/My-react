import React from 'react'
import Myheading from './components/Myheading'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import "./style/App.css"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Product from './components/Product'


function App() {
  return (
    <div>
      <Router>
        <Myheading/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
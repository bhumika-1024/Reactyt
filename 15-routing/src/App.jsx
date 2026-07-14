import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nav from "./components/Navbar";
import Product from "./pages/Product";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/product' element={<Product />}/>
      </Routes>
      <h3>this is footer</h3>
    </div>
  )
}

export default App

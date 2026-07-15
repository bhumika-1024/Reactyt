import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CoursesDetail from './pages/CoursesDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/courses' element={<Courses/>}/>
           {/* dynamic routing */}
            <Route path='/courses/:id' element={<CoursesDetail/>}/>

            <Route path='/product' element={<Product/>}>
              <Route path='men' element={<Men/>}/>
              <Route path='women' element={<Women />}/>
            </Route>

            <Route path='/contact' element={<Contact/>} />

            <Route path='*' element={<NotFound/>}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App

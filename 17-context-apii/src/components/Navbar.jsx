import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    const [theme,settheme]=useContext(ThemeDataContext)
  return (
    <div className={theme}>
       <h2>Bhumika</h2>
       <Nav2/>
    </div>
  )
}

export default Navbar
import React, { useContext } from 'react'
import {ThemeDataContext} from '../context/ThemeContext'

const Button = () => {
     const [theme,settheme] = useContext(ThemeDataContext)
    const changeTheme=()=>{
      settheme('dark')
    }
  return (
    <div>
        <button onClick={changeTheme}>chamge Theme</button>
    </div>
  )
}

export default Button
import { useState } from 'react';
import { useEffect } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect(function(){
    console.log('use effect is running..');
  },[num])

  return (
    <div>
      <h1>num is :{num}</h1>
      <h1>num2 is {num2}</h1>
      <button onMouseEnter={function(){
        setnum(num+1)
      }} onMouseLeave={function(){
        setnum2(num2+10)
      }}>
        click me 
        </button>
    </div>
  )
}

export default App

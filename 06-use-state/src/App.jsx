import React, { useState } from 'react'

const App = () => {

  const [num, setfirst] = useState(0)

 function increase(){
  setfirst(num+1)
 }
function decrease(){
  setfirst(num-1)
}
function jump5(){
  setfirst(num+5)
}

  return (
  <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump5}>jump By 5</button>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {

/* const [num, setnum] = useState({user:'bhumika', age:20})

 function btnClicked(){
  const newNum = {...num};
  newNum.user = 'abhay';
  newNum.age = 18
  setnum(newNum)
}

const [first, setfirst] = useState([10,20,30])

function btnClicked2(){
const Nnum = [...first]
Nnum.push (50)
setfirst(Nnum)
}*/

//batch update 
const [num,setNum] = useState(10)

function btnClicked(){
  setNum(prev => (prev+1))
  setNum(prev => (prev+1))
  setNum(prev => (prev+1))
}
  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click (object)</button>
      <h1>{first}</h1>
      <button onClick={btnClicked2}>Click (array)</button> */}

<h1>{num}</h1>
<button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App

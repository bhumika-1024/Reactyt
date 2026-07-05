import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  const user = 'bhumika'
  const age = 25
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Card />
      </div>
    </>
  )
}

export default App
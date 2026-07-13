import React from 'react'

const App = () => {
 // localStorage.setItem('userName','abhay')
//to set a value in local storage (key:value) pair
 // localStorage.setItem('age','20')
  //to retrieve from local storage
  //console.log(localStorage.getItem('userName'));
  //to remove item
 // localStorage.removeItem('userName')
   //to clear storage
  // localStorage.clear()

  const user = {
    username : 'bhumika',
    age: 20,
    city: 'haridwar'
  }

  //localStorage.setItem('user', JSON.stringify(user))

  const user2= JSON.parse(localStorage.getItem('user'))
  console.log(user2)
  return (
    <div>
      App
    </div>
  )
}

export default App

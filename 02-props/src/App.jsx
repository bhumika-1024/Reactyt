import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      < Card user='Abhay' age={18} img='https://images.unsplash.com/photo-1742812174810-c7525d200248?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dnlaY0lzeUh2WjB8fGVufDB8fHx8fA%3D%3D'/>
      < Card user='Bhumika' age={20} img='https://images.unsplash.com/photo-1782638871330-d8dca44ade37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHZ5WmNJc3lIdlowfHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App

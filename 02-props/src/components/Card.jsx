import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <h2>age : {props.age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button>view profile</button>
      </div>
  )
}

export default Card

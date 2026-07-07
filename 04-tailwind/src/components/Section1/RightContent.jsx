import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 w-2/3 rounded-4xl overflow-x-auto flex flex-nowrap gap-10 '>
      {props.users.map(function(elem, idx){
        return <RightCard key={idx}  img={elem.img} tag={elem.tag} id={idx} color={elem.color} />
      })}
    </div>
  )
}

export default RightContent

import React from 'react'
import { ArrowRight } from 'lucide-react';


const RightCardContent = (props) => {
  return (
    <div className='absolute p-8 flex flex-col justify-between top-0 left-0 h-full w-full'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-stone-700 text-white mb-10 text-lg leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum libero recusandae quos sint, illum aliquid.</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full'><ArrowRight /></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent

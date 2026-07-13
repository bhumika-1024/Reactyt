import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './components/Card';

const App = () => {

const [userData, setUserData] = useState([])
const [index, setindex] = useState(1)

const getData = async() => {
    const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data);
  }

useEffect(function(){
    getData()
  },[index])

let printUserData = 
<h3 className='font-semibold text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
Loading...
</h3>

if(userData.length>0){
  printUserData = userData.map(function(elem,idx){
    return <div key={idx}>
     <Card elem={elem}/>
    </div>
  })
}


  return (
    <div className='overflow-auto bg-black h-screen p-4 text-white'>
        <div className='flex flex-wrap gap-4 p-2 h-[82%]'>
          {printUserData}
        </div>

        <div className='flex justify-center items-center p-4 gap-6'>
          <button 
          style={{opacity:index == 1? 0.5 : 1}}
          onClick={()=>{
              if(index>1){
                setindex(index-1)
                setUserData([])
              }
          }}
          className='bg-amber-600 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'>
            Prev
          </button>

          <h4>page {index}</h4>

          <button 
          onClick={()=>{
            setindex(index+1)
            setUserData([])
          }}
          className='bg-amber-600 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'>
            Next
          </button>
        </div>
    </div>
  )
}

export default App

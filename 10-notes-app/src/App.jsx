import React from 'react'
import { useState } from 'react';


const App = () => {

  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')
const [task, settask] = useState([])

const colors = [
  "#FDE68A", // Sticky Yellow
  "#A7F3D0", // Mint
  "#BFDBFE", // Sky Blue
  "#FBCFE8", // Light Pink
  "#FED7AA", // Peach
  "#DDD6FE", // Lavender
];

const submitHandler = (e) => {
  e.preventDefault();

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const copyTask = [...task];

  copyTask.push({
    title,
    detail,
    color: randomColor,
  });

  settask(copyTask);
  setdetail("");
  settitle("");
};

const delNote = (idx) => {
  if (window.confirm("Delete this note?")) {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  }
};

return (
    <div className='lg:flex p-10 h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='lg:w-1/2 p-10 flex flex-col items-start gap-5'>
         
          <h1 className='text-4xl font-bold'>📝 Add Notes</h1>
       
         {/*pehla i/p for heading */} 
          <input 
        type="text"
         placeholder='Enter notes heading'
         className='font-medium outline-none w-full px-5 py-2 border-2 rounded'
         value={title}
         onChange={(e)=>{
          settitle(e.target.value)
         }}
         />
        
        {/* detailed wala input */}
        <textarea 
        placeholder='write details here'
        className='font-medium outline-none w-full h-32 px-5 py-2 border-2 rounded resize-none'
        value={detail}
        onChange={(e)=>{
          setdetail(e.target.value)
        }}
        />
        <p className="text-sm text-gray-400 self-end">
            {detail.length}/300
        </p>
       
        <button 
        className='active:scale-95 w-full bg-white px-5 py-2 text-black rounded'
        >
          Add Notes
          </button>
      </form>
      
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        
        <h1 className='text-4xl font-bold'>📚 Recent Notes</h1>
        <p className="text-gray-400 mt-2">
            Total Notes: {task.length}
        </p>
        
        <div className="flex items-start justify-start flex-wrap gap-5 h-[90%] mt-5 overflow-auto">
  {task.length === 0 ? (
    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
      <h2 className="text-2xl font-semibold">📝 No notes yet!</h2>
      <p className="mt-2 text-lg">
        Create your first note to get started.
      </p>
    </div>
  ) : (
    task.map((elem, idx) => {
      return (
        <div
          key={idx}
           style={{ backgroundColor: elem.color }}
          className="flex items-start justify-between flex-col relative h-72  w-60 text-black px-4 pt-16 pb-10 rounded-2xl shadow-lg transition hover:scale-105"
        >
          <div className="flex-1 overflow-hidden w-full">
              <h3 className="text-lg font-bold leading-tight">
                  {elem.title}
              </h3>

              <p className="mt-3 text-sm leading-tight font-semibold text-gray-600 overflow-hidden">
                  {elem.detail}
              </p>
          </div>

          <button
            onClick={() => delNote(idx)}
            className="w-full cursor-pointer active:scale-95 py-2 text-xs rounded font-bold bg-red-400 text-white"
          >
            Delete
          </button>
        </div>
      );
    })
  )}
        </div>
        
      </div>
    </div>
  )
}

export default App

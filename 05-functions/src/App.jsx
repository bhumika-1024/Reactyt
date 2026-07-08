import React from 'react'

const App = () => {

  function btnClicked(){
    let a = document.querySelector('h1');
    a.innerText = `Hello, Abhay`
  }

function InputChanging(val){
  console.log(val);
}

function pageScrolling(val){
  if(val>0){
    console.log("seedha scroll");
  }else{
    console.log("ulta scrolling");
    
  }
}

  return (
    <div className='hi'>
      <h1>Hello, Bhumika</h1>

      <button onClick={btnClicked}>Change user</button>
      
      <button onClick={function(){
       document.querySelector('h1').innerText="hello, Bhumika";
      }}>Explore this </button>

      <input onChange={function (elem) {
        InputChanging(elem.target.value);
      }}
        type="text" placeholder="Enter Name"/>

        <div onMouseOver={(elem)=>{
          console.log(elem.clientX)
        }}
        className='box'></div>

        <div onWheel={(elem)=>{
            pageScrolling(elem.deltaY)
        }}>
          <div className='pageOne'></div>
        <div className='pageTwo'></div>
        <div className='pageThree'></div>
        </div>
    </div>
  )
}

export default App

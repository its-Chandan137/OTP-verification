import React, { useState } from 'react'

function Display() {
    // const [val,setVal] = useState("");
    let arr = [];

    function dis(){
        console.log(arr);
    }
  return (
    <div className='main-box'>
        <div className="contain-box">
            <h3>Enter value sent to @qtafdafacc</h3>
            <div className='big-box'>
                <input type="text" onChange= {(e) => arr.push(e.target.value)}/>
                <input type="text" onChange= {(e) => arr.push(e.target.value)}/>
                <input type="text" onChange= {(e) => arr.push(e.target.value)}/>
                <input type="text" onChange= {(e) => arr.push(e.target.value)}/>
            </div>
            <button className="VERIFY" onClick={() => {dis()}}>
                <h3>Verify!</h3>
            </button>
        </div>
        
    </div>
  )
}

export default Display
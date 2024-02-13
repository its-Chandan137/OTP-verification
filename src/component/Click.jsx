import React, { useState } from 'react'

function Click() {
    let [value,setValue] = useState(true)
    function click(){
        if(value)
        {
            document.querySelector('.clk').style.transform = "scaleX(0)"
        }
        else
        {
            document.querySelector('.clk').style.transform = "scaleX(1)"
        }      
    }
  return (
    <div>
        <h1 className='clk'>Display</h1>
        <button onClick={() =>{click(),setValue(!value)}}>Click!</button>
    </div>
  )
}

export default Click
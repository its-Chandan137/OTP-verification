import React, { useEffect, useRef, useState } from 'react'

function OtpInput({length = 4, onOtpSubmit=()=>{}}) {

    const [otp,setOtp] = useState(new Array(length).fill(""))
    const inputRef = useRef([])

    useEffect(() => {
        if(inputRef.current[0])
        {
            inputRef.current[0].focus()
        }
    },[])

    // console.log(inputRef);

    const handleChange = (i,e) =>{
        const val = e.target.value; // assigining value for 'val'
        if(isNaN(val)) return; // should be a number
        const newOtp = [...otp];
        newOtp[i] = val.substring(val.length - 1); //selecting value from last index
        setOtp(newOtp);

        // submit trigger
        const combinedOtp = newOtp.join("");
        if(combinedOtp.length == length) onOtpSubmit(combinedOtp);

        //moving to next input field after filling current
        if(val && i < length-1 && inputRef.current[i + 1])
        {
            inputRef.current[i + 1].focus();
            // inputRef.current[otp.indexOf("")].focus();

        }
    };
    const handleClick = (i) =>{
        inputRef.current[i].setSelectionRange(1,1)

        //extras
        if(i>0 && !otp[i-1])
        {
            inputRef.current[otp.indexOf("")].focus();
        }

    };
    const handleKeyDown = (i,e) =>{

        //moving to previous input field after pressing 'Backspace'
        if(e.key === "Backspace" && !otp[i] && i > 0 &&  inputRef.current[i - 1])
        {
            inputRef.current[i - 1].focus();
        }
    };

  return(
    <div className='inputContainer'>
        {
            otp.map((val,i) => {
                return (
                <input 
                key={i} 
                type='text' 
                value={val} // val input from 'handleChange' func.
                ref={(input) => (inputRef.current[i] = input)}
                onChange={(e) => {handleChange(i,e)}} //assigning value to 'val'
                onClick={() => {handleClick(i)}} // selects only empty input box
                onKeyDown={(e) => {handleKeyDown(i,e)}} //deleting from current index
                className='otpInput'
                />
                )
            })
        }
    </div>

)};
export default OtpInput;
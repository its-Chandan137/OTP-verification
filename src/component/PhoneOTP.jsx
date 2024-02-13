import React, { useState } from 'react'
import OtpInput from './OtpInput';

function PhoneOTP() {
    const [phonenum,setPhonenum] = useState("");
    const [showOTPInput,setShowOTPInput] = useState(false);

    const onOtpSubmit = (otp) =>{
        console.log("Login Successful", otp);
    }

    function handlePhoneNum(e){
        setPhonenum(e.target.value)
    }
    const handlePhoneSubmit = (e) =>
    {
        e.preventDefault();

        const regex = /[^0-9]/g;
        if(phonenum.length<10 || regex.test(phonenum))
        {
            alert("Invalid...")
            return;
        }
        else
        {
            setShowOTPInput(true);
        }
    }
  return (
    <div className='main-div'>
        
        {!showOTPInput? 

        <form className='loginForm' onSubmit={handlePhoneSubmit}>
            <input type="text" value={phonenum} onChange={handlePhoneNum} placeholder='Enter Phone Number...' className='phoneInput'/>

            <button type='submit'>Submit</button>

        </form> : 

        <div className='msgAndOtp'>
            <p>Enter OTP sent to {phonenum}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>}

    </div>
  )
}

export default PhoneOTP
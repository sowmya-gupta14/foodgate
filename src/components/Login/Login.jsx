import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {
    const [currState, setcurrState]= useState("Sign Up")
  return (
    <div className='login absolute z-[1] w-full bg-zinc-800 bg-opacity-60 h-full shadow-2xl shadow-zinc-900 grid'>
        <form action="" className='login-container place-self-center w-dynamic text-yellow-700 animate-[fadeIn_1s] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-sm  '>
            <div className="login-title flex justify-between items-center text-zinc-900">
                <h2 className='text-2xl font-medium'>{currState}</h2>
                <img className='w-4 cursor-pointer' onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>

            <div className="login-input flex flex-col gap-5">
                {currState==="Login"?<></>: <input className='outline-none border border-zinc-100 p-4 rounded' type="text" placeholder='Your name' required />}
                <input className='outline-none border border-zinc-100 p-4 rounded' type="email" placeholder='Your email' required />
                <input className='outline-none border border-zinc-100 p-4 rounded' type="password" placeholder='Your password' required />
            </div>

            <button className='p-4 rounded text-white bg-red-500 text-sm cursor-pointer'> {currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-condition flex items-start gap-2 -mt-4 ">
                <input className='mt-1' type="checkbox" required />
                <p>By continuing, I agree to the terms and conditions of privacy policy </p>
            </div>
            {currState==="Login"
             ?<p>Create a new account? <span className='text-red-500 font-medium cursor-pointer' onClick={()=> setcurrState("Sign Up")}>Click here</span></p>
             :<p>Already have an account? <span className='text-red-500 font-medium cursor-pointer' onClick={()=> setcurrState("Login")}>Login here</span></p>
            }
            
           
        </form>
    </div>
  )
}

export default Login
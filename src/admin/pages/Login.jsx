import React from 'react'
import { FaLock } from "react-icons/fa";


const Login = () => {
  return (
    <div className="wrapper w-full h-full flex justify-end mx-auto">
      <div className="container w-full h-full lg:w-1/2 flex flex-col justify-center items-center mx-auto lg:mx-0  gap-2 bg-slate-400 py-6">
        <div className="heading flex flex-col items-center">
          <span className=' w-16 h-16 text-white flex items-center justify-center rounded-full bg-purple-700 '>
            <FaLock />
          </span>
          <h2 className='font-bold text-xl'>Administrator Login</h2>
        </div>
        <div className='form flex flex-col justify-center items-center gap-2 w-full'>
          <input type="text" placeholder='Email Address OR Mobile Number*' className='px-2 py-2 rounded-lg w-4/5 lg:w-1/2' />
          <input type="text" placeholder='Password*' className='px-2 py-2 rounded-lg w-4/5 lg:w-1/2' />
          <span className='flex justify-center items-center gap-2'>
            <input type="checkbox" className='px-2 py-2' />
            <label htmlFor="remember me" className='font-semibold'>Remember me</label>
          </span>
          <button type='submit' className='w-4/5 lg:w-1/2 rounded-md  py-2 bg-blue-700 text-white text-lg font font-semibold' >Sign In</button>
        </div>

        <p className='font-semibold text-sm'>Copyright © NITAR @2024</p>

      </div>
    </div>
  )
}

export default Login
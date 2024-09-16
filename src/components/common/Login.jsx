import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
      <div className='md:w-[80%] w-[98%] md:h-[45%] lg:w-[40%] lg:h-[40%]  rounded-xl py-6 flex flex-col mx-auto border border-slate-500 justify-center items-center gap-2'>
        <div className='flex flex-col md:flex-row items-center justify-center mx-auto '>
            <span className='text-4xl font-semibold  '>
                  <a
                      href="/"
                      title="NITAR"
                      className="flex items-center text-4xl text-[#d10001] "
                  >
                      NITAR
                  </a>
            </span>
            <hr className='w-14 hidden md:block bg-slate-500 rotate-90'/>
              <span className='flex flex-col text-center md:text-left'>
                <h4 className='text-3xl font-semibold'>Welcome</h4>
                  <p className='text-2xl'>Login for a seamless experience</p>
            </span>

        </div>
        <div className='p-3 flex w-[80%] border items-center border-black rounded my-3'>
            <span className='px-3 text-2xl font-bold'>+91</span>
            <span><hr  className='w-8 rotate-90 '/></span>
            <input type="number" name="mob-number" id="mob-number" placeholder='Enter Your Mobile number' className='lg:text-xl md:text-lg  px-3 bg-transparent outline-none w-[90%]'  />
        </div>
        <div className='w-1/2 flex flex-col gap-1 justify-center items-center my-2'>
        <span className='flex items-center gap-2'>
        <input type="checkbox" name="" id="" className='w-6 h-6'/>
                  <p className='font-semibold'>I Agree to Terms and Conditions</p>
                
        </span>
                  <p className='underline  font-medium'>T&C's Privacy Policy</p>
        </div>

        <button className='bg-blue-500 w-[70%] font-semibold px-3 py-3 rounded-lg'>Login with OTP</button>
          <p>if You have'nt register yet then please <span className='text-blue-500 underline font-semibold'>Register</span> </p>

        <div className='flex gap-1 w-[70%] my-3 items-center justify-center'>
              <span className='w-[30%]'><hr className='w-full text-slate-300' /></span>
            <span className='px-2  rounded-md bg-slate-300 text-slate-500'>  Login using</span>
              <span className='w-[30%]'><hr className='w-full text-slate-300'/></span>
        </div>

          <div className=' border font-semibold  flex items-center justify-center gap-2 rounded-lg border-black w-[70%] px-3 py-3'>
              <span className='
              text-2xl'> <FcGoogle /></span>
              <p>Google</p>
          </div>
      
    </div>
  )
}

export default Login

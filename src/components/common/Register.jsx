import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
    return (
        <div className='md:w-[80%] w-[98%] md:h-[45%] lg:w-[40%] lg:h-[40%]  rounded-xl py-6 flex flex-col  border border-slate-500 justify-center items-center gap-2'>
            <div className='flex flex-col md:flex-row items-center justify-center  '>
                <span className='text-4xl font-semibold  '>
                    <a
                        href="/"
                        title="NITAR"
                        className="flex items-center text-4xl text-[#d10001] "
                    >
                        NITAR
                    </a>
                </span>
                <hr className='w-14 hidden md:block bg-slate-500 rotate-90' />
                <span className='flex flex-col text-center md:text-left'>
                    <h4 className='text-3xl font-semibold'>Welcome</h4>
                    <p className='text-xl'>Register and Start Exploring</p>
                </span>

            </div>
            <div className='flex flex-col w-full items-center'>

                <div className='p-2 flex w-[80%] border items-center border-black rounded my-3'>

                    <input type="text" placeholder='Enter Your name' className=' bg-transparent outline-none w-[90%]' />

                </div>

                <div className='p-2 flex w-[80%] border items-center border-black rounded my-3'>

                    <input type="email" placeholder='Enter Your Email' className=' bg-transparent outline-none w-[90%]' />

                </div>
                <div className='p-2 flex w-[80%] border items-center border-black rounded my-3'>

                    <input type="tel" name="mob-number" id="mob-number" pattern="[0-9]{10}" maxLength="10" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0,10);" required inputMode='numeric' placeholder='Enter Your Mobile number' className=' bg-transparent outline-none w-[90%]' />
                </div>
            </div>

            <div className='w-1/2 flex flex-col gap-1 justify-center items-center my-2'>
                <span className='flex items-center gap-2'>
                    <input type="checkbox" name="" id="" className='w-6 h-6' />
                    <p className='font-semibold'>I Agree to Terms and Conditions</p>

                </span>
                <p className='underline  font-medium'>T&C's Privacy Policy</p>
            </div>

            <button className='bg-green-500 w-[70%] font-semibold px-3 py-3 rounded-lg'>Register</button>
            <p>Already Registered <span className='text-blue-500 underline font-semibold'>Login</span></p>



            <div className='flex gap-1 w-full lg:w-[70%] my-3 items-center justify-center'>
                <span className='w-[30%]'><hr className='w-full text-slate-300' /></span>
                <span className='px-2 py-1  rounded-md bg-slate-300 text-slate-500'>Register using</span>
                <span className='w-[30%]'><hr className='w-full text-slate-300' /></span>
            </div>

            <div className=' border font-semibold  flex items-center justify-center gap-2 rounded-lg border-black w-[70%] px-3 py-2'>
                <span className='
              text-2xl'> <FcGoogle /></span>
                <p>Google</p>
            </div>
            <div className=' border font-semibold  flex items-center justify-center gap-2 rounded-lg border-black w-[70%] px-3 py-2'>
                <span className='
              text-2xl text-blue-500'> <FaFacebook /></span>
                <p>Facebook</p>
            </div>

        </div>
    )
}

export default Register

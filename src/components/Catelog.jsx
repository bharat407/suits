import React from 'react'
import kalash from '../assets/kalsh.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";

const Catelog = () => {
    return (
        <div className='w-full max-w-[1400px] mx-auto flex flex-col md:flex-row'>
            <div className='max-w-[1400px] relative md:w-[73%] w-[99%] px-2 justify-center items-center flex md:flex-row flex-col py-10 md:py-6 mx-auto my-4 border border-gray-500 rounded-lg'>
                <span className='absolute right-2 top-2 '><CiHeart /></span>
                <div className="image-carousel w-[25%] flex justify-center items-center">
                    <img className='' src={kalash} width={200} alt="" />
                </div>
                <div className="description md:w-[60%] w-[95%] justify-center items-center lg:justify-normal lg:items-baseline flex flex-col gap-2">
                    <h1 className='text-2xl'>
                        Shubh Banequets
                    </h1>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='rattings w-8 h-8 flex justify-center items-center rounded-md bg-green-600 text-white'>
                            <h2>4.2</h2>
                        </div>
                        <div className="start"></div>
                        <p className='rattings '>319 Rattings</p>
                    </div>
                    <div className='address'>
                        <span className='location'></span>
                        <p> Vasai Station Road Vasai West, Palghar</p>
                    </div>
                    <div className="services flex flex-wrap gap-2">
                        <span className='service1 bg-gray-400 px-2 py-1 rounded-lg'> Banquet Halls</span>
                        <span className='service1 bg-gray-400 px-2 py-1 rounded-lg'> Banquet Halls</span>
                    </div>
                    <div className='contact flex gap-4 text-white'>
                        <div className='bg-green-600 px-2 py-1 rounded-md'>
                            <h5>9651125864</h5>
                        </div>
                        <div className='bg-blue-600 px-2 py-1 rounded-md'>
                            <h5>Get Best Deals</h5>
                        </div>
                        <div className='px-2 py-1 text-black border flex justify-center items-center gap-2 border-gray-400 rounded-md'>
                            <IoLogoWhatsapp />
                            <h5>Chat</h5>
                        </div>
                    </div>
                </div>
                <div className='impressions absolute md:right-4 md:bottom-4 bottom-1 flex justify-center items-center '>
                    <BsGraphUpArrow />
                    <p>78 Peoples Recently enquired</p>
                </div>
            </div>


{/* sidebar section */}
            <div className="sidebar w-[26%] flex flex-col gap-2 border border-gray-500 rounded-lg py-4 px-4 my-4">
                <h1 className='flex gap-1 font-semibold'>Get the list of top <p className='text-blue-700'>Banquet Halls</p></h1>
                <p className='text-sm'>We'll send you contact details in seconds for free</p>
                <h3 className='font-semibold'>What Type of Banquet Hall You are looking for? </h3>
                <form action="" className='flex flex-col gap-2'>
                   <div className='flex gap-4'>
                        <div className='flex gap-2'> <input type="radio" name="ac" id="ac" />
                            <label htmlFor="">AC Banquet Halls
                            </label></div>
                        <div className='flex gap-2'>
                            <input type="radio" name="ac" id="ac" />
                            <label htmlFor="">AC Banquet Halls
                            </label>
                        </div>
                   </div>

                    <input type="text" placeholder='Name' className='border border-gray-500 rounded-sm outline-none px-2 py-1 w-full' />
                    <input type="number" placeholder='Mobile Number' className='border border-gray-500 rounded-sm outline-none w-full py-1 px-2' />
                    <button className='bg-blue-600 rounded-md w-full py-2 text-white'>Get Best Deal</button>
                </form>
            </div>
        </div>

    )
}

export default Catelog

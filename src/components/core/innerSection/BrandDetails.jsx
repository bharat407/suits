import React from 'react'
import { FaThumbsUp, FaMapMarkerAlt, FaRegBookmark, FaShare, FaPhone, FaCommentAlt, FaWhatsappSquare } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";

const BrandDetails = () => {
  return (
    <div className='max-w-[1400px] relative py-6 w-[100%] rounded-lg flex border  border-slate-400'>


      <div className='flex flex-wrap flex-col  mx-2 gap-2'>

        <div className='flex gap-2'>
          <div className='px-4 py-2 md:normal ' >
            <img src="https://content.jdmagicbox.com/bangalore/u7/080pxx80.xx80.170601133428.l7u7/logo/b7fecef67fcdc33953bc4b3748680bfa-s.jpg" className='w-20' alt="" />
          </div>
          <div className='flex flex-col'>
            <div className='flex justify-between items-center text-lg font-semibold  gap-4'>
              <div className='flex items-center gap-2'>
                <FaThumbsUp />
                <h2 className='text-3xl'>Isaral Business Solutions Pvt ltd</h2>
              </div>

            </div>
            <div className='2ndrow flex items-center gap-2 text-lg'>
              <span className='bg-green-500 px-2 rounded-md py-1'>
                <p>4.8</p>
              </span>
              <IoMdStar />
              <p>307 Ratings</p>
            </div>
          </div>
        </div>
        <div className="flex  items-center mt-2 text-sm text-gray-600">
          <FaMapMarkerAlt className="w-4 h-4 mr-1" />
          <span className='flex text-lg gap-2'>
            <p>NagarBhavi Bangalore</p> •  <p> 3.67 km</p> • <span className='text-green-500'>Opens at</span> 9:30 Tomorrow • 9 Years in Business
          </span>
        </div>
        <div className="mt-2 items-center text-gray-600 flex gap-2 text-xl">
          <BsGraphUpArrow />
          3570 people recently enquired
        </div>
        <div className="my-2 flex items-center flex-wrap gap-3">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaPhone className="w-4 h-4 mr-2" />
            9058756578
          </button>
          <button className="flex items-center gap-2 bg-slate-200 border border-green-600 hover:bg-slate-300 font-bold py-2 px-4  rounded">
            <span className='text-2xl text-green-500'><FaWhatsappSquare /></span>
            Whatsapp
          </button>
          <button className=" flex items-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ">
            <FaCommentAlt className="w-4 h-4 mr-2" />
            Enquire Now
          </button>
          <button className='flex justify-center items-center text-xl px-1 py-1 border border-slate-400 bg-slate-200 hover:scale-110 rounded-md'>
            <FaRegBookmark />
          </button>
          <button className='flex justify-center items-center px-1 py-1 text-xl border border-slate-400 bg-slate-200 hover:scale-110 rounded-md'>
            <MdEdit />
          </button>
          <button className='flex justify-center items-center px-1 text-xl py-1 border border-slate-400 bg-slate-200 hover:scale-110 rounded-md'>
            < FaShare />
          </button>
        </div>
        <div className='flex lg:absolute top-4 right-4 gap-2'>
          <span className='px-2 py-1 hover:bg-slate-300 font-medium bg-slate-200 rounded-lg'>Digital signature services</span>
          <span className='px-2 py-1 hover:bg-slate-300 rounded-lg font-medium bg-slate-200'>Online shopping websites</span>
        </div>
        <div className='flex lg:flex-col flex-row lg:absolute bottom-4 right-4 gap-2'>
          <h3 className='text-lg font-semibold lg:mr-0 mr-4'>Click to Rate </h3>
          <div className='flex gap-2'>
            <span className='px-1 py-1 hover:bg-orange-500 flex justify-center border border-slate-500 rounded-md items-center'>
              <IoMdStar />
            </span>
            <span className='px-1 py-1 flex justify-center  hover:bg-orange-500 border border-slate-500 rounded-md items-center'>
              <IoMdStar />
            </span>
            <span className='px-1 py-1 flex justify-center border  hover:bg-orange-500 border-slate-500 rounded-md items-center'>
              <IoMdStar />
            </span>
            <span className='px-1 py-1 flex justify-center  hover:bg-orange-500 border border-slate-500 rounded-md items-center'>
              <IoMdStar />
            </span>
            <span className='px-1 py-1 flex justify-center border  hover:bg-orange-500 border-slate-500 rounded-md items-center'>
              <IoMdStar />
            </span>

          </div>
        </div>
      </div>

    </div>
  )
}

export default BrandDetails
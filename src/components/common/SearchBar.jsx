import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch, FaMicrophone } from "react-icons/fa";

const SearchBar = () => {
    return (
        <React.Fragment>

            <div className='flex flex-col mx-auto w-full gap-2 my-2 px-6 max-w-[1400px]'>
                <h2 className='text-3xl font-semibold'>
                    Search across '5.6 Crore+' Business
                </h2>
                <div className='searchbar w-2/3 flex gap-4'>
                    <div className='border border-black bg-slate-300 w-1/3 rounded-lg gap-2 flex items-center  '>
                        <CiLocationOn className="text-2xl ml-2"/>
                        <input type="text" placeholder="Mumbai" className='text-xl outline-none placeholder:text-black placeholder:text-xl bg-transparent w-full py-3' />
                    </div>
                    <div className='border border-black w-2/3 rounded-lg gap-2 flex items-center  '>
                        <input type="text" placeholder="Search In Mumbai" className='text-xl px-4 outline-none placeholder:text-black placeholder:text-xl bg-transparent w-full py-3' />
                        <FaMicrophone  className="text-2xl mx-2 cursor-pointer"/>
                       <button className="bg-orange-500 px-1 flex justify-center items-center py-3 mx-1 rounded-md">
                         <FaSearch  className="text-2xl mx-2"/>
                        </button> 
                    </div>
                </div>

            </div>

        </React.Fragment>

    )
}

export default SearchBar
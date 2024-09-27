import React from 'react'

const Sidebar = () => {
  return (
        <div div className = " max-w-[25%] sidebar w-[95%]  md:w-[24%]  flex flex-col gap-2 border  border-gray-500 rounded-lg py-4 px-4 " >
          <h1 className="flex gap-1 font-semibold">
            Get the list of top <p className="text-blue-700">Banquet Halls</p>
          </h1>
          <p className="text-sm">
            We'll send you contact details in seconds for free
          </p>
          <h3 className="font-semibold">
            What Type of Banquet Hall You are looking for?{" "}
          </h3>
          <form action="" className="flex flex-col gap-2">
            <div className="flex gap-4">
              <div className="flex gap-2">
                {" "}
                <input type="radio" name="ac" id="ac" />
                <label htmlFor="">AC Banquet Halls</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="ac" id="ac" />
                <label htmlFor="">AC Banquet Halls</label>
              </div>
            </div>

            <input
              type="text"
              placeholder="Name"
              className="border border-gray-500 rounded-sm outline-none px-2 py-1 w-full"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="border border-gray-500 rounded-sm outline-none w-full py-1 px-2"
            />
            <button className="bg-blue-600 rounded-md w-full py-2 text-white">
              Get Best Deal
            </button>
          </form>
        </div >
  )
}

export default Sidebar

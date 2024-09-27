import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full md:w-[95%] lg:w-[24%] max-w-sm mx-auto md:mx-0 flex flex-col gap-4 border border-gray-500 rounded-lg p-4 mb-6 md:mb-0">
      <h1 className="flex flex-wrap gap-1 font-semibold text-lg">
        Get the list of top <span className="text-blue-700">Banquet Halls</span>
      </h1>
      <p className="text-sm">
        We'll send you contact details in seconds for free
      </p>
      <h3 className="font-semibold">
        What Type of Banquet Hall Are You Looking For?
      </h3>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <input type="radio" name="hallType" id="acHall" />
            <label htmlFor="acHall">AC Banquet Halls</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="hallType" id="nonAcHall" />
            <label htmlFor="nonAcHall">Non-AC Banquet Halls</label>
          </div>
        </div>

        <input
          type="text"
          placeholder="Name"
          className="border border-gray-500 rounded-sm outline-none px-3 py-2 w-full"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="border border-gray-500 rounded-sm outline-none w-full py-2 px-3"
        />
        <button className="bg-blue-600 hover:bg-blue-700 rounded-md w-full py-2 text-white font-semibold transition duration-300">
          Get Best Deal
        </button>
      </form>
    </div>
  );
};

export default Sidebar;

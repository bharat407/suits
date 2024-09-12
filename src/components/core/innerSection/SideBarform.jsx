
import React, { useState } from "react";

const SideBarform = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, mobileNumber });
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Get the List of <span className="text-blue-600">Computer Software Developers</span>
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        We'll send you contact details in seconds for free
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Send Enquiry &#x279E;
        </button>
      </form>
    </div>
  );
};

export default SideBarform;

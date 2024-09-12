import React, { useState, useRef } from "react";
import {
  FaPencilAlt,
  FaPlay,
  FaChartLine,
  FaStar,
  FaRegStar,
  FaThumbsUp,
  FaComment,
  FaShare,
  FaEllipsisV,
} from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TiThumbsUp } from "react-icons/ti";

const BrandDesc = () => {
  const recentRatings = [5.0, 4.0, 5.0, 4.5, 5.0, 5.0, 5.0, 4.5, 4.0];
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Quick Info", "Photos", "Key Insights", "Reviews"];

  // Refs for each section
  const overviewRef = useRef(null);
  const quickInfoRef = useRef(null);
  const photosRef = useRef(null);
  const keyInsightsRef = useRef(null);
  const reviewsRef = useRef(null);

  // Scroll to the corresponding section
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case "Overview":
        overviewRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Quick Info":
        quickInfoRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Photos":
        photosRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Key Insights":
        keyInsightsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Reviews":
        reviewsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Overview Section */}
      <section ref={overviewRef} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          This is the overview section where you can add some random text about
          the brand, its mission, vision, and services. You can modify or expand
          this text later to include more detailed information about the
          business.
        </p>
      </section>
      {/* Navbar */}
      <nav className="mb-8">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
          {tabs.map((tab) => (
            <li key={tab} className="mr-2">
              <button
                className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Quick Info Section */}
      <section
        ref={quickInfoRef}
        className="flex justify-between p-6 w-1/2 border-solid border-[1px]"
      >
        <div className="quick-info">
          <h2 className="text-xl font-semibold mb-4">Quick Information</h2>
          <p className="text-gray-600">Year of Establishment</p>
          <p className="text-lg font-medium">2015</p>
        </div>
        <div className="timings">
          <h2 className="text-xl font-semibold mb-4">Timings</h2>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="pr-4 py-1">Mon - Fri</td>
                <td>9:30 am - 8:00 pm</td>
              </tr>
              <tr>
                <td className="pr-4 py-1">Sat</td>
                <td>9:30 am - 6:00 pm</td>
              </tr>
              <tr>
                <td className="pr-4 py-1">Sun</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
          <button className="flex items-center text-blue-500 mt-2">
            <FaPencilAlt size={16} className="mr-1" />
            Suggest new hours
          </button>
        </div>
      </section>

      {/* Photos Section */}
      <section
        ref={photosRef}
        className="p-6 w-1/2 border-solid border-[1px] "
      >
        <h2 className="text-2xl font-semibold mb-4">Photos</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <img
              src="/api/placeholder/300/200"
              alt="iSaral logo"
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-sm font-semibold rounded">
              ALL
            </div>
          </div>
          <div className="relative bg-gray-100 rounded-lg flex items-center justify-center h-40">
            <img
              src="/api/placeholder/300/200"
              alt="Justdial logo"
              className="w-full h-full object-cover rounded-lg opacity-50"
            />
            <FaPlay className="absolute text-white" size={48} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-semibold">All</h3>
            <p className="text-gray-600 text-sm">24 Photos / Videos</p>
          </div>
          <div>
            <h3 className="font-semibold">Video</h3>
            <p className="text-gray-600 text-sm">1 Video</p>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center">
          <IoCloudUploadOutline className="mr-2" size={20} />
          Upload Photos
        </button>
      </section>

      {/* Key Insights Section */}
      <section
        ref={keyInsightsRef}
        className="p-6 border-solid border-[1px] w-1/2 "
      >
        <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-dashed border-gray-300 rounded-lg p-4">
            <h3 className="flex items-center text-lg font-semibold text-green-600 mb-3">
              <TiThumbsUp className="mr-2" />
              What users liked
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Quick and easy connection</li>
              <li>Prompt and professional responses to queries</li>
              <li>
                Kind and helpful support from Pavithra in various tasks such as
                configuring remote access, updating DSC registration, explaining
                details, installing software, etc.
              </li>
            </ul>
            <button className="text-blue-500 mt-3">More</button>
          </div>

          <div className="border border-dashed border-gray-300 rounded-lg p-4">
            <h3 className="flex items-center text-lg font-semibold text-red-600 mb-3">
              <FaChartLine className="mr-2" />
              What can be improved
            </h3>
            <ul className="list-disc pl-5">
              <li>No specific dislikes mentioned in the reviews</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          *BETA VERSION - Likes and suggested improvements are based on the
          reviews across the web
        </p>
      </section>

      {/* Reviews Section */}
      <section
        ref={reviewsRef}
        className="w-1/2 border-solid border-[1px] p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Reviews & Ratings</h2>

        <div className="flex items-center mb-4">
          <div className="bg-green-500 text-white text-3xl font-bold p-2 rounded mr-4">
            4.8
          </div>
          <div>
            <p className="font-semibold">370 Ratings</p>
            <p className="text-sm text-gray-500">
              JD rating index based on 370 ratings across the web
            </p>
          </div>
        </div>

        <div className="flex mb-6">
          {recentRatings.map((rating, index) => (
            <div key={index} className="mr-1">
              {rating >= 4.5 ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaRegStar />
              )}
            </div>
          ))}
        </div>

        <div className="flex space-x-4">
          <button className="flex items-center text-blue-500">
            <FaThumbsUp className="mr-1" />
            Like
          </button>
          <button className="flex items-center text-blue-500">
            <FaComment className="mr-1" />
            Comment
          </button>
          <button className="flex items-center text-blue-500">
            <FaShare className="mr-1" />
            Share
          </button>
          <button className="flex items-center text-blue-500">
            <FaEllipsisV className="mr-1" />
            More
          </button>
        </div>
      </section>
    </div>
  );
};

export default BrandDesc;

import { React, useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const contentData = [
    { number: "‘4.4 Crore+’", description: "Businesses" },
    { number: "‘5.6 Crore+’", description: "Products & Services" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
        setFade(false);
      }, 1000);
    }, 2500);

    return () => clearInterval(interval);
  }, [contentData.length]);

  const handleSpeak = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.start();
      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        setSearchText(spokenText);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
    } else {
      alert("Speech recognition is not supported in your browser.");
    }
  };

  return (
    <>
      <div className="flex flex-col md:mx-auto w-full gap-2 my-2 px-4 md:px-6 max-w-[1400px]">
        <div className="relative mt-3">
          <h2 className="text-3xl font-semibold">
            Search across{" "}
            <span
              className={`inline-block transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <span>{contentData[currentIndex].number}</span>{" "}
              <span className="text-blue-500">
                {contentData[currentIndex].description}
              </span>
            </span>
          </h2>
        </div>
        <div className="md:w-2/3 flex gap-4 mt-1">
          <span className="border border-black bg-[#EEEEEE] w-1/3 rounded-xl gap-2 md:flex hidden items-center">
            <CiLocationOn className="text-2xl ml-2" />
            <input
              type="text"
              placeholder="Mumbai"
              className="text-xl placeholder:text-gray-500 placeholder:text-xl outline-none bg-[#EEEEEE] w-full rounded-xl py-3"
            />
          </span>
          <div className="border border-black md:w-2/3 w-full rounded-lg gap-2 flex items-center">
            <input
              type="text"
              placeholder="Search In Mumbai"
              className="text-xl px-4 outline-none placeholder:text-gray-500 placeholder:text-xl bg-transparent w-full py-3"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <img
              alt="Microphone"
              onClick={handleSpeak}
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/jdvoice_mic.gif"
              className="h-[5vh] cursor-pointer"
            />
            <button className="bg-[#fe610c] hover:bg-[#FF7D18] px-1 flex justify-center items-center py-3 mx-1 rounded-md">
              <FaSearch size={18} className="text-white mx-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

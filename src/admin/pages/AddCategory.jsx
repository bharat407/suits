import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const CategoryForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/category`, formData);
      toast.success("Category added successfully!", {
        duration: 2000,
      });

      // Clear input fields
      setName("");
      setImage("");

      // Optional: Reset file input manually
      document.getElementById("imageInput").value = "";
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Error adding category");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-400 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-1/2 m-6 p-6 rounded-xl shadow-lg"
      >
        <div className="mb-4">
          <div className=" justify-between flex text-gray-700 font-bold mb-2">
            Category Name
            <div>
              <NavLink to="/displaycategory">
                <IoMdMenu size={24} />
              </NavLink>
            </div>
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Category Image
          </label>
          <input
            type="file"
            id="imageInput"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 rounded-md w-full p-2"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Category
          </button>

          <button
            type="reset"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;

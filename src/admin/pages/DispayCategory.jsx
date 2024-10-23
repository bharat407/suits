import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";
import { MdAddToPhotos } from "react-icons/md";
import { NavLink } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/categories`
      );
      setCategories(response.data);
      console.log("DATA :- ", response);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Server Error");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/category/${deleteCategory._id}`
      );
      toast.success("Category deleted successfully");
      fetchCategories();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Failed to delete category");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", editName);
    if (editImage) formData.append("image", editImage);

    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/category/${editCategory._id}`,
        formData
      );
      toast.success("Category updated successfully");
      setIsEditModalOpen(false);
      fetchCategories();
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Failed to update category");
    }
  };

  const EditModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-400 p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Category</h2>
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            placeholder="Category Name"
          />
          <input
            type="file"
            onChange={(e) => setEditImage(e.target.files[0])}
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />

          <div className="flex gap-4 justify-between">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const DeleteModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-400 p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Delete Category</h2>
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <p className="mb-4">Are you sure you want to delete this category?</p>
        <div className="flex justify-end">
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="bg-gray-300 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-400 m-5 p-6 rounded-lg shadow-md">
      <div className="text-xl flex justify-between font-bold mb-5">
        All Categories
        <NavLink to="/addcategory">
          <MdAddToPhotos size={24} />
        </NavLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category._id}
            className="border bg-gray-600 text-white shadow-xl rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-32 h-32 object-fill mb-2 rounded"
            />
            <h3 className="font-semibold mb-2">{category.name}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setEditCategory(category);
                  setEditName(category.name);
                  setIsEditModalOpen(true);
                }}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setDeleteCategory(category);
                  setIsDeleteModalOpen(true);
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {isEditModalOpen && <EditModal />}
      {isDeleteModalOpen && <DeleteModal />}
    </div>
  );
};

export default CategoryList;

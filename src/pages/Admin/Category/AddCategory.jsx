import { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { useFirebase } from "@/context/Firebase/FirebaseContext";

const AddCategory = () => {
  const Firebase = useFirebase();
  const [name, setName] = useState("");
  const [editName, setEditName] = useState("");
  const [editId, setEditId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  useEffect(() => {
    Firebase.ListAllCategory().then((category) => setCategories(category.docs));
  }, [Firebase]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Firebase.HandleAddCategory(name);
    setShowSubmitModal(true);
    setName("");
    Firebase.ListAllCategory().then((category) => setCategories(category.docs));
  };

  const handleDelete = async () => {
    if (deleteCategory) {
      await Firebase.DeleteCategory(deleteCategory);
      const updatedCategories = categories.filter(
        (category) => category.id !== deleteCategory
      );
      setCategories(updatedCategories);
      setDeleteCategory(null);
    }
  };

  const handleEdit = (categoryId, categoryName) => {
    setEditId(categoryId);
    setEditName(categoryName);
  };

  const handleEditSubmit = async (categoryId) => {
    await Firebase.UpdateCategory(categoryId, editName);
    setEditId(null);
    setEditName("");
    Firebase.ListAllCategory().then((category) => setCategories(category.docs));
  };

  return (
    <div className="p-4 sm:p-8 bg-[#EEEEEE] shadow-xl rounded-xl">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto bg-[#76ABAE] p-6 rounded-lg shadow-md items-center justify-center"
      >
        <label
          htmlFor="categoryName"
          className="text-lg font-semibold text-white mr-3 mt-2 sm:mt-0"
        >
          Category Name:
        </label>
        <div className="flex flex-grow relative w-full sm:w-auto">
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="categoryName"
            className="appearance-none block w-full px-3 py-2 border text-black border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            placeholder="Enter category name"
          />
          <span className="ml-2">
            <button type="submit" className="btn bg-[#31363F] text-white px-4 py-2 rounded-md">
              Add
            </button>
          </span>
        </div>
      </form>

      <div className="mt-12 flex flex-col items-center justify-center w-full px-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray">Category List</h2>
        <div className="w-full overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full divide-y">
            <thead className="bg-[#76ABAE]">
              <tr>
                <th
                  scope="col"
                  className="p-4 text-left text-md font-semibold text-white uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-md font-semibold text-white uppercase"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y bg-[#31363F]">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="p-4 w-full text-sm font-medium text-white">
                    {editId === category.id ? (
                      <input
                        type="text"
                        onChange={(e) => setEditName(e.target.value)}
                        value={editName}
                        className="p-1 w-full border border-gray-300 rounded text-black"
                      />
                    ) : (
                      category.data().name
                    )}
                  </td>
                  <td className="p-4 text-sm text-gray-600 flex items-center justify-center space-x-4">
                    {editId === category.id ? (
                      <button
                        onClick={() => handleEditSubmit(category.id)}
                        className="text-white hover:text-[#76ABAE] p-2 rounded-lg border border-[#EEEEEE] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#EEEEEE]"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            handleEdit(category.id, category.data().name)
                          }
                          className="flex items-center justify-center w-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out cursor-pointer"
                        >
                          <BsPencilSquare />
                        </button>
                        <label
                          htmlFor="delete-modal"
                          className="flex items-center justify-center w-12 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out cursor-pointer"
                          onClick={() => setDeleteCategory(category.id)}
                        >
                          <FaTrashAlt />
                        </label>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {deleteCategory && (
        <div>
          <input type="checkbox" id="delete-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirm Deletion</h3>
              <p className="py-4 text-black">Are you sure you want to delete this Category?</p>
              <div className="modal-action">
                <label htmlFor="delete-modal" className="btn">
                  Cancel
                </label>
                <label htmlFor="delete-modal" className="btn bg-[#76ABAE]" onClick={handleDelete}>
                  Confirm
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSubmitModal && (
        <div>
          <input type="checkbox" id="submit-modal" className="modal-toggle" checked />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Category Added</h3>
              <p className="py-4 text-black">The category has been added successfully.</p>
              <div className="modal-action">
                <label htmlFor="submit-modal" className="btn" onClick={() => setShowSubmitModal(false)}>
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategory;

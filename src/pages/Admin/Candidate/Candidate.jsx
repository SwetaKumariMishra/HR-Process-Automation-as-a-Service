import { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useFirebase } from "../../../context/Firebase/FirebaseContext";

const Candidate = () => {
  const firebase = useFirebase();

  const [datas, setDatas] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    firebase
      .ListAllCandidate()
      .then((candidate) =>
        setDatas(candidate.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  }, [firebase]);

  const handleDelete = () => {
    if (deleteId) {
      firebase.DeleteCandidate(deleteId).then(() => {
        firebase
          .ListAllCandidate()
          .then((candidate) =>
            setDatas(
              candidate.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            )
          );
        setDeleteId(null);
      });
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#EEEEEE] text-white">
      <div className="mt-10 overflow-x-auto lg:w-full sm:w-[20%]">
        <table className="table-auto w-full text-sm sm:text-base">
          <thead className="bg-[#76ABAE]">
            <tr>
              <th className="px-4 py-2">UserName</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th></th>
              <th>
                <Link to="/admin/candidate/addEditCandidate">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-lg shadow transition-all duration-300 ease-in-out mb-4 sm:mb-0">
                    <IoIosPersonAdd />
                  </button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {datas &&
              datas.map((data) => (
                <tr key={data.id} className="text-center bg-[#31363F]">
                  <td className="border px-4 py-2">{data.userName}</td>
                  <td className="border px-4 py-2">{data.password}</td>
                  <td className="border px-4 py-2">{data.email}</td>
                  <td className="border px-4 py-2">{data.phone}</td>
                  <td className="border px-4 py-2">
                    <Link to={`/admin/candidate/${data.id}`}>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
                        <BsPencilSquare />
                      </button>
                    </Link>
                  </td>
                  <td className="border px-4 py-2">
                    {data.isAdmin ? (
                      <label className="flex items-center justify-center w-12 bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
                        <FaTrashAlt />
                      </label>
                    ) : (
                      <label
                        htmlFor="delete-modal"
                        className="flex items-center justify-center w-12 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out cursor-pointer"
                        onClick={() => setDeleteId(data.id)}
                      >
                        <FaTrashAlt />
                      </label>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deleteId && (
        <div>
          <input type="checkbox" id="delete-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirm Deletion</h3>
              <p className="py-4 text-black">
                Are you sure you want to delete this candidate?
              </p>
              <div className="modal-action">
                <label htmlFor="delete-modal" className="btn">
                  Cancel
                </label>
                <label
                  htmlFor="delete-modal"
                  className="btn bg-[#76ABAE]"
                  onClick={handleDelete}
                >
                  Confirm
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidate;

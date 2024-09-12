import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../context/Firebase/FirebaseContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const firebase = useFirebase();

  const [userData, setUserData] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    firebase.ListById(id).then((doc) => setUserData(doc.data()));
  }, [firebase, id]);

  const validate = () => {
    const errors = {};
    if (!userData.userName.trim()) {
      errors.userName = "User Name is required";
    }
    if (!userData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = "Email is invalid";
    }
    if (!userData.password) {
      errors.password = "Password is required";
    } else if (userData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (!userData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(userData.phone)) {
      errors.phone = "Phone number is invalid";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await firebase.EditCandidate(
          id,
          userData.userName,
          userData.email,
          userData.password,
          userData.phone
        );
        setShowModal(true);
      } catch (error) {
        console.error("Error updating user: ", error);
      }
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/admin/candidate");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Update Candidate Form
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-sm font-medium leading-6">
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="userName"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Enter userName"
                    value={userData.userName}
                    onChange={handleInputChange}
                  />
                  {errors.userName && (
                    <p className="text-red-500 text-xs">{errors.userName}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="email"
                    name="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Enter email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="password"
                    name="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Enter password"
                    value={userData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6">
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="number"
                    name="phone"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Enter phone number"
                    value={userData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <button type="submit" className="btn bg-[#76ABAE] text-white">
                  Update
                </button>
                <Link to="/admin/candidate">
                  <button className="btn bg-[#76ABAE] text-white">Back</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div>
          <input
            type="checkbox"
            id="confirmation-modal"
            className="modal-toggle"
            checked
            readOnly
          />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-black">Success</h3>
              <p className="py-4 text-black">Data updated successfully!</p>
              <div className="modal-action">
                <label
                  htmlFor="confirmation-modal"
                  className="btn"
                  onClick={handleModalClose}
                >
                  OK
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;

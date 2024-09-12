import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../../../context/Firebase/FirebaseContext";

const AddEditCandidate = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!userName) newErrors.userName = "User Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    else if (!/[A-Z]/.test(password))
      newErrors.password = "Password must contain at least one uppercase letter";
    else if (!/[a-z]/.test(password))
      newErrors.password = "Password must contain at least one lowercase letter";
    else if (!/[0-9]/.test(password))
      newErrors.password = "Password must contain at least one digit";
    else if (!/[!@#$%^&*]/.test(password))
      newErrors.password =
        "Password must contain at least one special character (!@#$%^&*)";

    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Phone number is invalid";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await firebase.AddCandidate(userName, email, password, phone);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/admin/candidate");

    setUserName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setErrors({});
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#EEEEEE] text-white">
      <div className="bg-[#76ABAE] rounded-lg sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold">
          Candidate Form
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white shadow-2xl py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-700">
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border text-black border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-purple focus:border-[#31363F] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Enter username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {errors.userName && (
                    <p className="text-red-500 text-xs mt-2">{errors.userName}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-700">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border text-black border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-purple focus:border-[#31363F] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-700">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="password"
                    className="appearance-none block w-full px-3 py-2 border text-black border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-purple focus:border-[#31363F] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-2">{errors.password}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-700">
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="number"
                    className="appearance-none block w-full px-3 py-2 border text-black border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-purple focus:border-[#31363F] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-2">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button className="btn bg-[#76ABAE] text-white" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div>
          <input type="checkbox" id="confirmation-modal" className="modal-toggle" checked readOnly />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-black">Success</h3>
              <p className="py-4 text-black">Data added successfully!</p>
              <div className="modal-action">
                <label htmlFor="confirmation-modal" className="btn" onClick={handleModalClose}>
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

export default AddEditCandidate;

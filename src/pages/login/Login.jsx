import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFirebase } from "@/context/Firebase/FirebaseContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [redirectPath, setRedirectPath] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const proceedLogin = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const candidate = await firebase.GetCandidateByEmailAndPassword(
        email,
        password
      );
      if (candidate) {
        setModalMessage("Login Successful! You have successfully logged in.");
        setShowModal(true);
        sessionStorage.setItem("id", candidate.id);
        sessionStorage.setItem("isAdmin", candidate.isAdmin);
        sessionStorage.setItem("userName", candidate.userName);
        sessionStorage.setItem("email", candidate.email);
        setRedirectPath("/");
      } else {
        setModalMessage("Invalid email or password");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      setModalMessage("Failed to login");
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    if (modalMessage === "Login Successful! You have successfully logged in.") {
      navigate(redirectPath);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#EEEEEE] py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={proceedLogin}>
              <div>
                <label className="block text-sm font-medium leading-6">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-[#31363F] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6">
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      to="/forgotPassword"
                      className="font-semibold text-[#31363F] hover:text-[#9da5b5]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-[#31363F] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-6 ml-6 flex space-x-4">
                <button className="btn bg-[#76ABAE] text-white">Login</button>
                <Link to="/signup">
                  <button className="btn bg-[#76ABAE] text-white">
                    Create New Account
                  </button>
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
            id="submission-modal"
            className="modal-toggle"
            checked
            readOnly
          />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Notification</h3>
              <p className="py-4 text-black">{modalMessage}</p>
              <div className="modal-action">
                <label
                  htmlFor="submission-modal"
                  className="btn"
                  onClick={handleModalClose}
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

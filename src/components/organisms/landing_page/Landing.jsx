import React, { useState } from "react";
import illustrationImage from "./illustration.png";
import { Link, useNavigate } from "react-router-dom";
import CompanyLogo from "./Xopuntech_Logo_1.png";

function Landing() {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);

  const handleClickLogin = () => {
    navigate("/Login");
  };

  const handleContactForm = () => {
    setShowContactForm(true);
    navigate("/ContactForm");
  };

  const handleClickAbout = () => {
    navigate("/About");
  };

  const handleClickCard = () => {
    navigate("/card");
  };

  const handleClickSignUp = () => {
    navigate("/signup");
  };


  return (
    <div className="flex flex-col h-screen md:h-screen">
      {/* Header */}
      <header className="bg-white shadow py-4 px-8 flex justify-between items-center">
        <div className=" w-72 m-4 p-2">
          <img src={CompanyLogo} alt="Company Logo" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <p
                className="nav-link hover:text-blue-500 cursor-pointer"
                onClick={handleContactForm}
              >
                Contact Us
              </p>
            </li>
            <li>
              <p
                className="nav-link hover:text-blue-500 cursor-pointer"
                onClick={handleClickAbout}
              >
                About Us
              </p>
            </li>
            <li>
              <p className="nav-link hover:text-blue-500 cursor-pointer">FAQ</p>
            </li>
            <li>
              <a
                href="#"
                className="nav-link-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={handleClickLogin}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={handleClickSignUp}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="flex items-center justify-center">
        <div className="max-w-fit mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center h-full">
            <div className="md:w-2/5 mx-2 p-6">
              <h1 className="text-4xl font-bold mb-4">Online EXAMINATION</h1>
              <p className="mb-8">
              Take your exams online with ease and convenience. Our platform provides a secure and efficient way to conduct examinations, ensuring integrity and reliability.
              </p>
              <button class="btn-5 bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:text-blue-950 relative px-6 py-3 rounded-md transition duration-300 ease-in-out hover:bg-transparent hover:shadow-none">
                <span class="relative z-10" onClick={handleClickCard}>Proceed to Exam</span>
              </button>
            </div>
            <div className="md:w-3/5 mt-8 md:mt-0 flex items-center justify-center">
              <img
                src={illustrationImage}
                alt="Online Examination Illustration"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 text-center">
        <div>&copy; XopunTech India Pvt Ltd{new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}

export default Landing;

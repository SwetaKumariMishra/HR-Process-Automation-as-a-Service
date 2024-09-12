import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import SearchBar from "@/components/atoms/SearchBar";
import UserIcon from "@/utils/UserIcon";

const UserProfileSection = ({ userName, isAdmin, toggleMobileMenu }) => (
  <div className="flex items-center space-x-2">
    {isAdmin === "true" && (
      <Link to="/admin/Dashboard" onClick={toggleMobileMenu}>
        <button className="btn bg-[#76ABAE]">Go to Dashboard</button>
      </Link>
    )}
    <UserIcon />
    <span className="font-light text-black">{userName}</span>
  </div>
);

const ExamHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    setIsAdmin(sessionStorage.getItem("isAdmin"));
    setUserName(sessionStorage.getItem("userName"));
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-black bg-[#EEEEEE] p-2 lg:p-1 flex justify-between items-center shadow-sm sticky top-0 z-50">
      <div className="ml-1">
        <div className="w-8 h-8 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="https://www.dci.vowelsoftech.in/img/backend_img/logo.png"
            alt="Logo"
            className="max-w-full max-h-full"
          />
        </div>
      </div>
      <nav className="hidden md:flex space-x-4 md:space-x-6 items-center">
        <div className="relative flex-1 justify-center">
          <FaSearch
            fontSize={20}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
          />
          <SearchBar />
        </div>
        <ScrollLink
          to="homeSection"
          smooth={true}
          className="hover:underline font-bold text-[#76ABAE] cursor-pointer"
          activeClass="active"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="aboutSection"
          smooth={true}
          className="hover:underline font-bold text-[#76ABAE] cursor-pointer"
          activeClass="active"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="contactSection"
          smooth={true}
          className="hover:underline font-bold text-[#76ABAE] cursor-pointer"
          activeClass="active"
        >
          Contact
        </ScrollLink>
        {userName ? (
          <UserProfileSection
            userName={userName}
            isAdmin={isAdmin}
            toggleMobileMenu={toggleMobileMenu}
          />
        ) : (
          <>
            <Link to="/login">
              <button className="btn bg-[#76ABAE]">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn bg-[#76ABAE]">Register here</button>
            </Link>
          </>
        )}
      </nav>

      <button
        className="md:hidden text-2xl"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white p-5 shadow-md flex flex-col items-center space-y-4 md:hidden">
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full"
            />
          </div>
          <Link
            to="/"
            className="hover:underline font-bold text-[#76ABAE]"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline font-bold text-[#76ABAE]"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link
            to="/contactForm"
            className="hover:underline font-bold text-[#76ABAE]"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>
          {userName ? (
            <UserProfileSection
              userName={userName}
              isAdmin={isAdmin}
              toggleMobileMenu={toggleMobileMenu}
            />
          ) : (
            <>
              <Link to="/login" onClick={toggleMobileMenu}>
                <button className="btn bg-[#76ABAE]">Login</button>
              </Link>
              <Link to="/signup" onClick={toggleMobileMenu}>
                <button className="btn bg-[#76ABAE]">Register here</button>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default ExamHeader;

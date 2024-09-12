import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div id="contactSection" className="min-h-screen bg-[#EEEEEE] flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        <div className="md:w-1/2 p-8 bg-gray-50 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">For further information, reach out to us</h2>
          <div className="flex items-center mb-4">
          <i className="text-2xl mr-4"><FaPhone /></i>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Contact Number</h4>
              <p className="text-gray-600">+91 96116 54101</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <i className="text-2xl mr-4"><MdEmail /></i>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Our Mail</h4>
              <p className="text-gray-600">info@xopuntech.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="text-2xl mr-4"><IoLocation /></i>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Our Location</h4>
              <p className="text-gray-600">SOS Rd, STPI, Borjhar, Guwahati, Assam - 781015</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-center text-[#76ABAE] text-sm font-semibold uppercase">How may we help you</h2>
          <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">Get in touch!</h1>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31363F]"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31363F]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject *"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31363F]"
            />
            <textarea
              placeholder="Write A Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#31363F] h-32"
            />
            <button className="w-full btn bg-[#76ABAE] text-white py-2 rounded-md font-semibold transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
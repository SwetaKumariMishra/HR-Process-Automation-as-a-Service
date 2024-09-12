import { FaFingerprint, FaShieldAlt, FaPlug } from 'react-icons/fa';

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      
      {/* Main Content */}
      <div className="w-full max-w-7xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Help Centre</h2>
        <p className="text-center text-gray-600 mb-6">
          We understand that sometimes you may encounter difficulties or have questions while using our platform and we're here to assist you every step of the way.
        </p>
        
        {/* Search */}
        <div className="flex justify-center mb-10">
          <input 
            type="text"
            placeholder="Type a keyword"
            className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE]block w-full sm:text-sm border-gray-300 rounded-md p-2 max-w-lg"
          />
          <select className="ml-2 shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE]block w-36 sm:text-sm border-gray-300 rounded-md p-2">
            <option>General</option>
          </select>
          <button className="ml-2 bg-[#76ABAE] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#31363F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#76ABAE]">
            Find query
          </button>
        </div>
        
        {/* Icons Section */}
        <div className="flex justify-around mb-10">
          <div className="text-center">
            <FaFingerprint className="text-5xl text-[#76ABAE] mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-800">Fraud and Protection</h3>
            <p className="text-gray-600">We are committed to ensuring the security and integrity of our website and protecting our users.</p>
          </div>
          <div className="text-center">
            <FaShieldAlt className="text-5xl text-[#76ABAE] mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-800">Privacy and Security</h3>
            <p className="text-gray-600">Protecting your privacy and ensuring the security of your personal information is of utmost importance to us.</p>
          </div>
          <div className="text-center">
            <FaPlug className="text-5xl text-[#76ABAE] mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-800">Managing my account</h3>
            <p className="text-gray-600">We are here to provide you with the information and assistance you need to effectively manage your account.</p>
          </div>
        </div>
        
        {/* Help Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4">
            <nav className="text-gray-700">
              <h4 className="font-semibold text-gray-900 mb-2">Getting started</h4>
              <ul className="space-y-1">
                <li className="pl-4 border-l-2 border-[#76ABAE] font-semibold text-[#76ABAE]">Account Creation</li>
                <li>User Onboarding</li>
                <li>Platform Navigation</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mt-4 mb-2">Account Setup and Management</h4>
              <ul className="space-y-1">
                <li>Profile Settings</li>
                <li>Security Settings</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mt-4 mb-2">Troubleshooting and Technical Support</h4>
              <ul className="space-y-1">
                <li>Common Issues</li>
                <li>Contact Support</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mt-4 mb-2">Billing and Payment</h4>
              <ul className="space-y-1">
                <li>Payment Methods</li>
                <li>Invoices</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mt-4 mb-2">Privacy and Security</h4>
              <ul className="space-y-1">
                <li>Data Protection</li>
                <li>Account Security</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mt-4 mb-2">Fraud and Protection</h4>
              <ul className="space-y-1">
                <li>Recognizing Fraud</li>
                <li>Reporting Issues</li>
              </ul>
            </nav>
          </div>
          
          {/* Content */}
          <div className="w-3/4 pl-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Getting Started</h3>
            <p className="text-gray-700 mb-4">
              Welcome to Acetone! We’re excited to have you on board. This guide will help you get started and make the most of our services.
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                <strong>Account Creation:</strong>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Visit our website and click on the “Sign Up” or “Create Account” button.</li>
                  <li>Fill in the required information, such as your name, email address, and password.</li>
                  <li>Follow the verification process, which may include confirming your email or phone number.</li>
                </ul>
              </li>
              <li>
                <strong>User Onboarding:</strong>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Once you have created your account, you will be guided through the onboarding process.</li>
                  <li>Familiarize yourself with the platform’s layout and navigation.</li>
                  <li>Explore the different features and functionalities available to you.</li>
                </ul>
              </li>
              <li>
                <strong>Platform Navigation:</strong>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Take a tour of the main menu and sub-menu options to understand how to navigate through the platform.</li>
                  <li>Pay attention to the organization of content and tools for easy access.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;

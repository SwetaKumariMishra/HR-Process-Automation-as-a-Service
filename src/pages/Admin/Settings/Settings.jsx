import { FaUser, FaLock, FaBell, FaPalette, FaShieldAlt } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-5xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>

        <form className="space-y-8">
          {/* Profile Settings */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaUser className="mr-2 text-[#76ABAE]" /> Profile Settings
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="col-span-1">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLock className="mr-2 text-[#76ABAE]" /> Security Settings
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="col-span-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="2fa" className="block text-sm font-medium text-gray-700 mb-2">
                  Two-Factor Authentication
                </label>
                <select
                  id="2fa"
                  name="2fa"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBell className="mr-2 text-[#76ABAE]" /> Notification Settings
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="col-span-1">
                <label htmlFor="email-notifications" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Notifications
                </label>
                <select
                  id="email-notifications"
                  name="email-notifications"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>
              <div className="col-span-1">
                <label htmlFor="sms-notifications" className="block text-sm font-medium text-gray-700 mb-2">
                  SMS Notifications
                </label>
                <select
                  id="sms-notifications"
                  name="sms-notifications"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaPalette className="mr-2 text-[#76ABAE]" /> Theme Settings
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="col-span-1">
                <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  id="theme"
                  name="theme"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
              <div className="col-span-1">
                <label htmlFor="primary-color" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Color
                </label>
                <input
                  type="color"
                  id="primary-color"
                  name="primary-color"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaShieldAlt className="mr-2 text-[#76ABAE]" /> Privacy Settings
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="col-span-1">
                <label htmlFor="profile-visibility" className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Visibility
                </label>
                <select
                  id="profile-visibility"
                  name="profile-visibility"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>Public</option>
                  <option>Private</option>
                  <option>Friends Only</option>
                </select>
              </div>
              <div className="col-span-1">
                <label htmlFor="data-sharing" className="block text-sm font-medium text-gray-700 mb-2">
                  Data Sharing
                </label>
                <select
                  id="data-sharing"
                  name="data-sharing"
                  className="shadow-sm focus:ring-[#76ABAE] focus:border-[#76ABAE] block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-6">
            <button
              type="submit"
              className="bg-[#76ABAE] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#31363F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#76ABAE]"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="ml-4 bg-gray-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#76ABAE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;

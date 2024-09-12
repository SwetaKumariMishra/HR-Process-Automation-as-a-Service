import { useState } from "react"
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Forgot your password?
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and will send you a link to reset your
            password.
          </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-[#EEEEEE]">
        <form className="space-y-6" onSubmit={handleForgotPassword}>
        <div>
              <label className="block text-sm font-medium leading-6">
                Email address
              </label>
              <div className="mt-2">
                <input
                  required
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6">
            <Link to="/resetPassword">
              <button className="btn bg-[#76ABAE]" type="submit" >Send reset mail</button>
            </Link>
            </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default ForgotPassword
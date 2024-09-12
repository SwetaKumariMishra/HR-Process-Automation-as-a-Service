// ThankYouComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouComponent = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">Thank You!</h1>
        <p className="text-lg mb-6">Your exam has been submitted successfully.</p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            OK
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouComponent;

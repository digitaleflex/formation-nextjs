import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl mt-4 text-gray-600">Page Not Found</p>
        <a
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-white">
      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-center w-full font-mono">
          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-gray-800">
            Unauthorized Access ://
          </h1>
          <p className="my-12 font-extrabold text-red-600 text-8xl animate-bounce">
            403
          </p>
          <p className="mb-8 text-xl text-center text-gray-800">
            Oops! It seems like you don't have permission to access this page.
          </p>
          <p className="mb-16 text-lg text-center text-gray-800">
            Contact the administrator for further assistance.
          </p>
          <Link
            to="/"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Go Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;

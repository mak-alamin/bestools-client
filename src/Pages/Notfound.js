import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="text-center py-6">
      <img
        src="./images/not-found.png"
        alt="Page Not Found"
        className="md:w-1/2 mx-auto"
      />

      <Link to="/" className="btn btn-info">
        Back To Home
      </Link>
    </div>
  );
};

export default Notfound;

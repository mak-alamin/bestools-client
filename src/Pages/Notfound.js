import React from "react";
import { Link } from "react-router-dom";
import NotfoundImage from "../images/not-found.png";

const Notfound = () => {
  return (
    <div className="text-center py-6">
      <img
        src={NotfoundImage}
        alt="Page Not Found"
        className="md:w-1/2 mx-auto"
      />

      <Link to="/" className="btn btn-info mt-3">
        Back To Home
      </Link>
    </div>
  );
};

export default Notfound;

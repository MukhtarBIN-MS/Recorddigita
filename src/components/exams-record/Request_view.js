import React from "react";
import Header from "./Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

export default function Request_view() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="px-5 py-5">
      <Header />
      <div className="flex flex-row items-center">
        <FaArrowLeft className="mr-2" onClick={handleGoBack} />{" "}
        <p>View Request Details</p>
      </div>
      <div className="flex flex-col w-full h-full">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-5 h-full flex-2 w-full bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col">
          <p className="mt-2 font-bold">Holder Info:</p>
          <p>Holder Name: </p>
          <p>Matric Number: </p>
          <p>Year of Adission: </p>
          <p>Matric No: </p>
          <p>Program: </p>
          <p>Date Submitted: </p>
          <p>Document: </p>
        </div>

        <div className="flex flex-col">
          <p className="mt-2 font-bold">Reciever Info:</p>
          <p>Upload to: </p>
          <p>Email: </p>
          <p>Address: </p>
          <p>Document uploaded: </p>
        </div>

        <div className="flex flex-col">
          <p className="mt-2 font-bold">Request Details:</p>
          <p>Request type: </p>
          <p>Mode of delivery: </p>
        </div>

        <div className="flex flex-col">
          <p className="mt-2 font-bold">Payment:</p>
          <p>Status: </p>
          <p>Amount paid: </p>
        </div>

        <div className="flex flex-col">
        </div>

        <div className="flex flex-col">
          <p className="mt-2 font-bold">Verification Officer:</p>
          <p>Name: </p>
          <p>Email: </p>
          <p>Office: </p>
        </div>
      </div>
    </div>
      <div className="flex flex-row items-center mt-5 justify-end">
        <button className="py-2 px-4 bg-white text-red-500 border mr-10 border-w-1 border-black rounded-md hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Make query
        </button>
        <Link to="/upload">
          <button className="py-2 px-4 bg-[#012756]  text-white border border-w-1 border-black rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Start processing
          </button>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import Header from "./Header";
import {Link,  useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Approved() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="px-5 py-5">
      <Header />
      <div className="flex flex-row items-center">
      <FaArrowLeft className="mr-2" onClick={handleGoBack} /> <p>Track Approved Transcripts</p></div>
      <div className="flex flex-col w-full h-full">
        <div className="flex-1 w-full h-full bg-white rounded-lg shadow-md p-6"></div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-20 h-full flex-2 w-full bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col">
            <p className="mt-2 font-bold">Holder Info:</p>
            <p>Request Form: </p>
            <p>Matric Number: </p>
            <p>Year of Adission: </p>
            <p>Program: </p>
            <p>Date Submitted: </p>
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
        </div>
      </div>
    </div>
  );
}

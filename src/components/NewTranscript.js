import React, { useState } from "react";
import {Link,  useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Header from "./Header";
function NewTranscript() {
  const [selectedValue, setSelectedValue] = useState("");
  const [showButton, setShowButton] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setShowButton(true);
  };

  const handleButtonClick = () => {
    // do something with selected value
    console.log(selectedValue);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  

  return (
    <div class="px-5 py-5">
    <Header />
    <div className="flex flex-row items-center">
    <FaArrowLeft className="mr-2" onClick={handleGoBack} /> <p>Transcript Request</p></div>
    <div className="mt-20 flex flex-col items-center justify-center">
      <h2 className="text-2xl items-start font-bold mb-4">Select Degree:</h2>
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className=" w-1/2 border border-gray-400 rounded p-2 mb-4"
      >
        <option value="">Select an option</option>
        <option value="option1">Bsc</option>
        <option value="option2">Msc</option>
        <option value="option3">PhD</option>
      </select>
      {showButton && (
        <div>
        <Link to='/info'>
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 flex items-end justify-end text-white font-bold py-2 px-4 rounded"
        >
          Proceed
        </button>
        </Link>
        </div>
      )}
    </div>
    </div>
  );
}

export default NewTranscript;


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Header from "./Header";
function HolderInfo() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div class="px-5 py-5">
      <Header />
      <div className="flex flex-row items-center">
        <FaArrowLeft className="mr-2" onClick={handleGoBack} />{" "}
        <p>Transcript Request</p>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <h2 className="text-2xl items-start font-bold mb-4">Holder Info</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label for="institution">Request for</label>
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className=" w-full border border-gray-400 rounded p-2 mb-2"
          >
            <option value="">Select an option</option>
            <option value="option1">Self</option>
            <option value="option2">Institution</option>
          </select>
          <label for=" institution">Mode of delivery</label>
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className=" w-full border border-gray-400 rounded p-2 mb-2"
          >
            <option value="">Select an option</option>
            <option value="option2">
              Send to Institution & Upload To My Profile
            </option>
            <option value="option2">
              Courirer Services & Upload To My Profile
            </option>
          </select>
          <label htmlFor="name" className="font-medium">
          Reciever Email
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2"
        />
        <label htmlFor="name" className="font-medium">
        Reciever Address
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
        </form>

        {showButton && (
          <div className="items-center justify-center">
            <button
              onClick={handleButtonClick}
              className="mt-3 bg-blue-500 hover:bg-blue-700 flex items-center justify-center text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HolderInfo;

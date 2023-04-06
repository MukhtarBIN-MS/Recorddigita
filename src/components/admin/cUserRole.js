import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CUserRole() {
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
      <div className="flex flex-row items-center">
        <FaArrowLeft className="mr-2" onClick={handleGoBack} /> <p>Role</p>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <h2 className="text-2xl items-start font-bold mb-4">Create User Role</h2>
        <form onSubmit={handleSubmit} className="w-1/2 flex flex-col space-y-4">
        <label for="institution">Select Tier</label>
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className="w-full border border-gray-400 rounded p-2 mb-2"
        >
          <option value="">Select an option</option>
          <option value="option1">Tier 1</option>
          <option value="option2">Tier 2</option>
          <option value="option3">Tier 3</option>
        </select>
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />

          <div className="items-center justify-center">
          <button
            onClick={handleButtonClick}
            className="mt-3 bg-[#012756] hover:bg-blue-700 flex items-center justify-center text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
        </div>
        </form>

      </div>
    </div>
  );
}

export default CUserRole;

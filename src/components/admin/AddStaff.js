import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function AddStaff() {


  const handleButtonClick = () => {
    // do something with selected value
    console.log('hi');
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div class="px-5 py-5">
      <div className="flex flex-row items-center">
        <FaArrowLeft className="mr-2" onClick={handleGoBack} /> <p>Staff</p>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <h2 className="text-2xl items-start font-bold mb-4">Create Staff</h2>
        <form onSubmit={handleSubmit} className="w-1/2 flex flex-col space-y-4">
          <label htmlFor="name" className="font-medium">
            Staff id
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={id}
            onChange={(e) => setID(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="name"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <label htmlFor="name" className="font-medium">
            Password
          </label>
          <input
            type="password"
            id="name"
            name="name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <div className="items-center justify-center">
          <button
            onClick={handleButtonClick}
            className="mt-3 bg-[#012756]hover:bg-blue-700 flex items-center justify-center text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
        </form>

      </div>
    </div>
  );
}

export default AddStaff;

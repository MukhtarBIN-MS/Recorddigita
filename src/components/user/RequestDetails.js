import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Button, Modal } from "antd";

import Header from "./Header";
function HolderInfo() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
  const [recieverMail, setRecieverMail] = useState("");
  const [recieverAddress, setRecieverAddress] = useState("");
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
          <label htmlFor="reciever" className="font-medium">
            Reciever Email
          </label>
          <input
            type="text"
            id="reciever_mail"
            name="reciever_mail"
            value={recieverMail}
            onChange={(e) => setRecieverMail(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <label htmlFor="name" className="font-medium">
            Reciever Address
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={recieverAddress}
            onChange={(e) => setRecieverAddress(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
        </form>

        {showButton && (
          <div className="items-center justify-center">
            <button
              onClick={showModal}
              className="mt-3 bg-[#012756] hover:bg-blue-700 flex items-center justify-center text-white font-bold py-2 px-4 rounded"
            >
              Proceed
            </button>
          </div>
        )}
      </div>

      {/** This Modal will only open when the user finish submitting his details*/}
      
      <div className="flex flex-col items-center justify-center">
        <Modal
          open={open}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <div className="flex flex-row items-center justify-center">
            <Button key="back"  className="bg-gray-500 text-white" onClick={handleCancel}>
              Pay later
            </Button>,
            <Button
              key="submit"
              className="bg-[#012756] text-white"
              loading={loading}
              onClick={handleOk}
            >
              Pay Now
            </Button>,
            </div>
          ]}
        >
          <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold">Request Saved</h4>
          <img style={{width:100, height:100, margingBottom:5}} src={require('../../Images/success.png')}/>
          <p className="text-center mb-3">Your request has been saved Successfully! <br/> Proceed to make payment to confirm your request</p>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default HolderInfo;

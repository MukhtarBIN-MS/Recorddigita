import React, { useState } from "react";
import Header from "./Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Button, Modal } from "antd";

export default function Request_view() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

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
  const showModal2 = () => {
    setOpen2(true);
  };

  const handleOk2 = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen2(false);
    }, 3000);
  };

  const handleCancel2 = () => {
    setOpen2(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
      <div className="flex flex-row items-center mt-5 justify-end">
        <button
          onClick={showModal}
          className="py-2 px-4 bg-white text-red-500 border mr-10 border-w-1 border-black rounded-md hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Make query
        </button>
        <button onClick={showModal2} className="py-2 px-4 bg-[#012756]  text-white border border-w-1 border-black rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Validate request
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Modal
          open={open}
          title=""
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <div className="flex items-center justify-center">
              <Button
                key="back"
                className="mt-3 bg-[#012756] hover:bg-blue-700 flex items-center justify-center text-white font-bold py-3 px-5 rounded"
                onClick={showModal}
              >
                Send
              </Button>
            </div>,
          ]}
        >
          <div className="t-10 mt-10 mb-10 border-r-10 rounded-lg p-2 font-bold text-2xl bg-[#012756] text-white w-full text-center">
            Add query details
          </div>
          <div className="flex flex-row items-center justify-center mb-5">
            <form
              onSubmit={handleSubmit}
              className="w-1/2 flex flex-col space-y-4"
            >
              <label for="institution">Reason for query</label>
              <select
                value={selectedValue}
                onChange={handleSelectChange}
                className="w-full border border-gray-400 rounded p-2 mb-2"
              >
                <option value="">Select an option</option>
                <option value="option1">Holder details validation</option>
                <option value="option2">Msc</option>
                <option value="option3">PhD</option>
              </select>
              <label htmlFor="name" className="font-medium">
                Description
              </label>
              <textarea className="w-full border border-gray-400 rounded p-2 mb-2"></textarea>
            </form>
          </div>
        </Modal>
      </div>
         <div className="flex items-center justify-center">
         <Modal
           open={open2}
           title=""
           onOk={handleOk2}
           onCancel={handleCancel2}
           footer={[
            <div className="flex flex-row items-center justify-center">
            <Button key="back"  className="bg-gray-500 text-white" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              className="bg-[#012756] text-white"
              loading={loading}
              onClick={handleOk}
            >
              Yes
            </Button>,
            </div>
          ]}
         >
         <div className="flex flex-col items-center justify-center">
         <h4 className="text-2xl font-bold">Confirm Approval</h4>
         <img style={{width:100, height:100, margingBottom:5}} src={require('../../Images/success.png')}/>
         <p className="text-center mb-3">Do you confirmed that the request is <br/> verified & approved for processing</p>
         </div>
         </Modal>
       </div>
 
    </div>
  );
}

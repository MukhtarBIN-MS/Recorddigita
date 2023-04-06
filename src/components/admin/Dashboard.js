import React, {useState} from "react";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@windmill/react-ui";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
import { Button, Modal, Input } from "antd";
import Header from "../user/Header";
import { Link } from "react-router-dom";


const docs = [
  {
    id: 'FCP/BTB/23/2222',
    DateSubmitted: "11-07-2022",
    Degree:'Bsc',
    status:'Pending',
    
  },
  {
    id: 'EEP/17/30/222',
    DateSubmitted: "11-07-2022",
    Degree:'Msc',
    status:'In progress',
    
  },

];


export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = () => {
    setIsModalOpen(false);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div class="px-5 py-5">
    <div className='mb-5'>
    <Header/>
    </div>
     
      {/**End of header section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow-md p-5">
        <div className="flex items-center justify-center h-5 bg-white text-black rounded-md text-5xl font-bold">
          65
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-gray-500 font-medium text-lg mb-2">Account Created</p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="py-2 px-4 bg-white text-black-200 rounded-md border border-w-1 border-black hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center h-5 bg-white text-yellow-500 rounded-md text-5xl font-bold">
          8
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-yellow-500 font-medium text-lg mb-2">Staff</p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="py-2 px-4 bg-white text-yellow-500 rounded-md border border-w-1 border-black hover:bg-yellow-800 hover:text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center h-5 bg-white text-green-500 rounded-md text-5xl font-bold">
          4
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-green-500 font-medium text-lg mb-2">Active Satff</p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="py-2 px-4 bg-white text-green-500 border border-w-1 border-black rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View
          </button>
        </div>
      </div>
    </div>
      {/* End of tab section*/}
         </div>
  );
}

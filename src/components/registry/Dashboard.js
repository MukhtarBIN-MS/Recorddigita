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
          12
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-gray-500 font-medium text-lg mb-2">Request Recieved</p>
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
          <p className="text-yellow-500 font-medium text-lg mb-2">Request in progress</p>
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
          <p className="text-green-500 font-medium text-lg mb-2">Approved Transcript</p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="py-2 px-4 bg-white text-green-500 border border-w-1 border-black rounded-md hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View
          </button>
        </div>
      </div>
    </div>
      {/* End of tab section*/}
      <div className="w-full lg: py-8">
      <TableContainer>
        <Table className="w-full whitespace-nowrap">
          <TableHeader>
            <TableRow>
              <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                Matric No.
              </TableCell>
              <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                Date Recieved
              </TableCell>
              <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
              Degree
            </TableCell>
              <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
               Status
            </TableCell>

            </TableRow>
          </TableHeader>
          <TableBody>
            {docs.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <div className="text-1xl">
                    <span className="font-semibold ml-2">{doc.id}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-1xl ml-2">{doc.DateSubmitted}</span>
                </TableCell>
                <TableCell>
                <span className="text-1xl ml-2">{doc.Degree}</span>
              </TableCell>
                <TableCell className="flex flex-row justify-between">
                <span className='ml-2 text-yellow-500'>{doc.status}</span>
                <Link to="/track">
                <button className="py-2 px-4 bg-[#012756]  text-white rounded-md border border-w-1 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  View
                </button>
              </Link>
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
    </div>
    </div>
  );
}

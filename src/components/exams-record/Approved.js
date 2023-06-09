import React, {useState} from "react";
import Header from "./Header";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@windmill/react-ui";
import { FaDownload, FaEllipsisV, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const docs = [
  {
    id: "EEP/565/JK/0987",
    DateRecieved: "11-07-2022",
    Degree: "Msc",
    Request_type: "Other",
    status: "Approved",
  },
];

export default function Approved() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="px-5 py-5">
      <Header />
      <div className="flex justify-end">
      <div className="flex items-center bg-white justify-end mb-3 border border-gray-300 rounded-full  px-4 py-2">
        <FaSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search by matric no.."
          value={searchText}
          onChange={handleInputChange}
          className="bg-transparent outline-none text-gray-700"
        />
      </div>
    </div>
      <h2 className="font-bold text-2xl font-sans">Approved Transcripts</h2>
      <div className="w-full lg: py-8">
        <TableContainer>
          <Table className="w-full whitespace-nowrap">
            <TableHeader>
              <TableRow>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left font-sans text-xs font-medium text-black uppercase tracking-wider">
                  Matric No
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left  font-sans text-xs font-medium text-black uppercase tracking-wider">
                  Date Recieved
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left font-sans text-xs font-medium text-black uppercase tracking-wider">
                  Request Type
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left font-sans text-xs font-medium text-black uppercase tracking-wider">
                  Degree
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left font-sans text-xs font-medium text-black uppercase tracking-wider">
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {docs.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="text-1xl">
                      <span className="font-semibold ml-2 font-sans">{doc.id}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-1xl ml-2 font-sans">{doc.DateRecieved}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-1xl ml-2 font-sans">{doc.Request_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-1xl ml-2 font-sans">{doc.Degree}</span>
                  </TableCell>
                  <TableCell className="flex flex-row justify-between">
                    <span
                      className= 'text-green-500 text-1xl ml-2 mt-2 font-sans'>
                      {doc.status}
                    </span>
                    <Link to="/approved">
                      <button className="py-2 px-4 bg-[#012756] font-sans  text-white rounded-md border border-w-1 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
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

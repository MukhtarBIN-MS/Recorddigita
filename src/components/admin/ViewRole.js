import React, {useState} from "react";
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
    id: "37488",
    Name: "Mukhtar Mahmud",
    Email:'mukhtarmahmud@yahoo.com',
    role:'Transcript official'
  },
];

export default function ViewRole() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="px-5 py-5">
      <div className="flex justify-end">
      <div className="flex items-center bg-white justify-end mb-3 border border-gray-300 rounded-full  px-4 py-2">
        <FaSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search roles"
          value={searchText}
          onChange={handleInputChange}
          className="bg-transparent outline-none text-gray-700"
        />
      </div>
    </div>
      <h2 className="font-bold text-2xl">Registrar</h2>
      <div className="w-full lg: py-8">
        <TableContainer>
          <Table className="w-full whitespace-nowrap">
            <TableHeader>
              <TableRow>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Staff id
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Name
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                Email
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
                    <span className="text-1xl ml-2">{doc.Name}</span>
                  </TableCell>
                  <TableCell>
                  <span className="text-1xl ml-2">{doc.Email}</span>
                </TableCell>
                  <TableCell className="flex flex-row justify-between">
                    <Link to="/">
                      <button className="py-2 px-4 bg-green-700  text-white rounded-md border border-w-1 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Active
                      </button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex align-center justify-center mt-10">
        <Link to="/add_staff_to_role">
        <button className="py-2 px-4 bg-[#012756] text-white rounded-md border border-w-1 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Add Staff to Role
      </button>
      </Link>
      </div>
      </div>
    </div>
  );
}

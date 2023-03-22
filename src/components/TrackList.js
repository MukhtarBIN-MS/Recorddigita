import React from "react";
import Header from "./Header";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@windmill/react-ui";
import { FaDownload, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

const docs = [
  {
    id: "OApkdd6K743849",
    DateSubmitted: "11-07-2022",
    Degree: "Msc",
    Request_type: "Other",
    status: "In progress",
  },
];

export default function History() {
  return (
    <div className="px-5 py-5">
      <Header />
      <h2 className="font-bold text-2xl">Request History</h2>
      <div className="w-full lg: py-8">
        <TableContainer>
          <Table className="w-full whitespace-nowrap">
            <TableHeader>
              <TableRow>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Reference id
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Date Submitted
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Request Type
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
                    <span className="text-1xl ml-2">{doc.Request_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-1xl ml-2">{doc.Degree}</span>
                  </TableCell>
                  <TableCell className="flex flex-row justify-between">
                    <span
                      className={
                        doc.status == "In progress"
                          ? "text-1xl text-yellow-500 ml-2"
                          : "text-1xl text-red-500 ml-2"
                      }
                    >
                      {doc.status}
                    </span>
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

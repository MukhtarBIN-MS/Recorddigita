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
import { FaDownload } from "react-icons/fa";

// Some dummy data generated for Transcripts

const docs = [
  {
    id: "QwdSKDK743849",
    DateSubmitted: "11-07-2022",
    Request_type: "Self",
    Degree: "Bsc",
    status: <FaDownload className="ml-2" />,
  },
];

export default function History() {
  return (
    <div className="px-5 py-5">
      <Header />
      <h2 className="font-bold text-2xl">My Approved Transcripts</h2>
      <div className="w-full lg: py-8">
        <TableContainer>
          <Table className="w-full whitespace-nowrap">
            <TableHeader>
              <TableRow>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Reference id
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Date Recieved
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Degree
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Request Type
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Action
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
                    <span className=" ml-2 text-1xl">{doc.DateSubmitted}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-1xl ml-2">{doc.Degree}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-1xl ml-2">{doc.Request_type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="flex flex-row items-center justify-between text-1xl ml-2"><span className="text-1xl text-green-500">Approved</span><span className="w-5 h-5">{doc.status}</span></span>
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

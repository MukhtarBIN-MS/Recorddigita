import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Pagination,
} from "@windmill/react-ui";
import { FaUser, FaEdit, FaTrash, FaSearch, FaFilter } from "react-icons/fa";
import { Button, Modal, Input } from "antd";
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const users = [
  {
    id: 1,
    name: "Mukhtar Mahmud",
    email: "myl772ng@gmail.com",
    type:'Customer',
    phone: "08107557734",
  },
  {
    id: 2,
    name: "Abdullahi Gazhali",
    email: "malan@yahoo.com",
    type:'Rider',
    phone: "09018419604",
  },
  {
    id: 3,
    name: "Mukhtar Mahmud",
    email: "myl772ng@gmail.com",
    type:'Customer',
    phone: "08107557734",
  },
  {
    id: 4,
    name: "Abdullahi Gazhali",
    email: "malan@yahoo.com",
    type:'Rider',
    phone: "09018419604",
  },
  {
    id: 5,
    name: "Mukhtar Mahmud",
    type:'Customer',
    email: "myl772ng@gmail.com",
    phone: "08107557734",
  },
  {
    id: 6,
    name: "Abdullahi Gazhali",
    type:'Rider',
    email: "malan@yahoo.com",
    phone: "09018419604",
  },
];

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [name, setName] = useState("Mukhtar Mahmud");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("mukhtarmahmud@yahoo.com");
  const [phone, setPhone] = useState("08107557734");
  const [accountName, setAccountName] = useState("Stanbic IBTC");
  const [bankName, setBankName] = useState("Stanbic IBTC");
  const [bankAccount, setBankAccount] = useState("123456789");
  const [pin, setPin] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showDeleteModal = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <div class="px-5 py-5">
    <div class="mb-10 sticky top-0 z-10">
    <div class=" flex flex-row justify-between">
      <div>
        <p class="px-5 font-semibold text-slate-500">
          Users / <Link to="/">Main Dashboard</Link>
        </p>
        <h1 class="px-5 text-4xl font-bold">Manage Users</h1>
      </div>
      <div class='flex flex-row mr-20'>
     
      <Input style={{width:300, height:30}} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search user" />
      <FaSearch className="w-5 h-5 ml-5 mt-1"/>
      <FaFilter className="w-5 h-5 ml-5 mt-1"/>
      </div>
    </div>
  </div>
      <div className='edit-user-modal'>
        <Modal
          title="Edit User"
          className="items-center justify-center"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <div className="flex items-center justify-center">
            <Button className="bg-slate-800 mt-5 w-20" key="back" onClick={handleCancel}>
              <p class='text-white'>Back</p>
            </Button>,
            <Button className="bg-green-800 mt-5 w-20" key="submit" onClick={handleOk}>
              <p class='text-white'>Edit</p>
            </Button>
            </div>,
          ]}
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                className="w-70"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">
              NIN
            </label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <Input
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Enter your bank name"
              />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">
              Acount Name
            </label>
            <Input
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="Enter your bank name"
            />
          </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <Input
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                placeholder="Enter your bank account number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input.Password
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter Password"
              />
            </div>
 
          </div>
        </Modal>
      </div>
      <div className='delete-user-modal'>
        <Modal
          open={isModalOpen2}
          title="Delete User"
          onOk={handleOk}
          onCancel={handleCancel2}
          footer={[
            <div className="flex items-center justify-center">
            <Button className="bg-slate-800 mt-5 w-20" key="back" onClick={handleCancel2}>
              <p class='text-white'>Back</p>
            </Button>,
            <Button className="bg-green-800 mt-5 w-20" key="submit" onClick={handleOk2}>
              <p class='text-white'>Delete</p>
            </Button>
            </div>,
          ]}
        >
          <h1 class='mt-10 text-3xl font-bold text-center'>Delete User .....</h1>

        </Modal>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TableContainer>
          <Table className="w-full whitespace-nowrap">
            <TableHeader>
              <TableRow>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 User Type
              </TableCell>
                <TableCell className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex flex-row items-center text-sm">
                      <FaUser class=" mr-7" />
                      <span className="font-semibold ml-2">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.email}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.phone}</span>
                  </TableCell>
                  <TableCell>
                  <span className="text-sm">{user.type}</span>
                </TableCell>
                  <TableCell className="flex flex-row">
                    <button
                      onClick={showModal}
                      className="w-20 h-10 mr-5 bg-green-700 rounded-lg border border-solid border-slate-900"
                    >
                      <div className="flex items-center justify-center">
                        <FaEdit className="text-slate-200" />
                      </div>
                    </button>
                    <button onClick={showDeleteModal} className="w-20 h-10 bg-red-700 rounded-lg border border-solid border-slate-900">
                      <div className="flex items-center justify-center">
                        <FaTrash className="text-slate-200" />
                      </div>
                    </button>
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

import React from "react";
import {
  FaUsers,
  FaUser,
  FaCog,
  FaUsersSlash,
  FaKey,
  FaHome,
  FaSignOutAlt,
  FaExchangeAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className="w-64 h-screen bg-gray-800">
      <div className="flex-1 p-6 mb-40">
        <div className="mb-14">
        <p class='text-white text-xl mb-2'>Admin Dashboard</p>
        <p class=' text-slate-500 text-1xl '>Mukhtar Mahmud</p>
        </div>
        
        <ul>
          <li className="mb-7">
            <Link to="/" className="flex items-center text-white">
              <FaHome className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-7">
            <Link to="/users" className="flex items-center text-white">
              <FaUser className="mr-2" /> Manage Users
            </Link>
          </li>
          <li className="mb-7">
          <Link to="/transactions" className="flex items-center text-white">
            <FaExchangeAlt className="mr-2" /> Transactions
          </Link>
        </li>
          <li className="mb-7">
            <Link to="/account_manage" className="flex items-center text-white">
              <FaUsersSlash className="mr-2" /> Account freeze / unfreeze
            </Link>
          </li>
          <li className="mb-7">
            <Link to="/reset_pin" className="flex items-center text-white">
              <FaKey className="mr-2" /> PIN RESET
            </Link>
          </li>
          <li className="mb-7">
            <Link to="/" className="flex items-center text-white">
              <FaCog className="mr-2" /> Manage Admins
            </Link>
          </li>   
          <li className="mb-7">
          <Link to="/profile" className="flex items-center text-white">
            <FaUser className="mr-2" /> Profile
          </Link>
        </li>  
        </ul>
      </div>
      <div class="p-6">
        <Link to="/" className="flex items-center text-white">
          <FaSignOutAlt className="mr-2" /> Sign Out
        </Link>
      </div>
    </div>
  );
}

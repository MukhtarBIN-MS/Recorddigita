import React from "react";
import {
  FaUser,
  FaHistory,
  FaInbox,
  FaHome,
  FaSignOutAlt,
  FaChartLine,
  FaCheckSquare
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SideMenu(onLogOut) {


  return (
    <div className="w-64 h-screen bg-[#012756] box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25)">
      <div className="flex-1 p-6 mb-40">
        <div className="mb-14">
        <p class='text-white text-xl mb-2'>RecordDigita</p>
        </div>
        
        <ul>
          <li className="mb-7">
            <Link to="/" className="flex items-center text-white">
              <FaHome className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-7">
            <Link to="/roles" className="flex items-center text-white">
              <FaInbox className="mr-2" /> User Roles
            </Link>
          </li>
          <li className="mb-7">
          <Link to="/staffs" activeClassName='bg-white text-black' className="flex items-center text-white">
            <FaChartLine className="mr-2" /> Staff
          </Link>
        </li>
          <li className="mb-7">
          <Link to="/approved" className="flex items-center text-white">
            <FaCheckSquare className="mr-2" /> Settings
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
          <FaSignOutAlt onClick={onLogOut} className="mr-2" /> Sign Out
        </Link>
      </div>
    </div>
  );
}

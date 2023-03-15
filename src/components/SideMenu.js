import React from "react";
import {
  FaUser,
  FaHistory,
  FaInbox,
  FaHome,
  FaSignOutAlt,
  FaChartLine
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SideMenu(onLogOut) {


  return (
    <div className="w-64 h-screen bg-gray-800">
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
            <Link to="/my_transcripts" className="flex items-center text-white">
              <FaInbox className="mr-2" /> My Transcripts
            </Link>
          </li>
          <li className="mb-7">
          <Link to="/track" className="flex items-center text-white">
            <FaChartLine className="mr-2" /> Track
          </Link>
        </li>
          <li className="mb-7">
          <Link to="/history" className="flex items-center text-white">
            <FaHistory className="mr-2" /> History
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

import React from "react";
import {
  FaUsers,
  FaCog,
  FaTasks,
  FaDollarSign,
  FaHome,
  FaSignOutAlt,
  FaExchangeAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import profile from '../Images/no-avatar.jpg';

export default function AdminHome() {
  return (
    <div class="px-5 py-5">
      <div class="mb-10 sticky top-0 z-10">
        <div class=" flex flex-row justify-between">
          <div>
            <p class="px-5 font-semibold text-slate-500">
              Pages / <Link to="/">Main Dashboard</Link>
            </p>
            <h1 class="px-5 text-4xl font-bold">Main Dashboard</h1>
          </div>
          <div >
          <img src={profile} class='w-20 h-20'/>
          </div>
        </div>
      </div>
      {/**End of header section */}
      <div>
        <ul class="list-none mx-auto flex flex-col sm:flex-row gap-4 items-center">
          <li class="w-60 shadow-lg flex flex-row items-center border border-solid border-slate-900 bg-white py-6 px-2 rounded-3xl">
            <FaUsers class="mr-7 w-7 h-7" />
            <div class="flex-col">
              <h3 class=" text-slate-700">No. of Users</h3>
              <p class="mt-2 text-3xl  text-slate-700">1123</p>
            </div>
          </li>
          <li class="w-60 shadow-lg flex flex-row items-center border border-solid border-slate-900 bg-white py-6 px-2 rounded-3xl">
            <FaExchangeAlt className="mr-7 w-7 h-7" />
            <div class="flex-col">
              <h3 class="text-slate-700">Transactions</h3>
              <p class="mt-2 text-3xl text-slate-700">1123</p>
            </div>
          </li>
          <li class="w-60 shadow-lg flex flex-row items-center border border-solid border-slate-900 bg-white py-6 px-2 rounded-3xl">
            <FaDollarSign className="mr-7 w-7 h-7" />
            <div class="flex-col">
              <h3 class="text-slate-700">Spend this month</h3>
              <p class="mt-2 text-3xl text-slate-700">1123</p>
            </div>
          </li>
          <li class="w-60 shadow-lg flex flex-row items-center border border-solid border-slate-900 bg-white py-6 px-2 rounded-3xl">
            <FaDollarSign className="mr-7 w-7 h-7" />
            <div class="flex-col">
              <h3 class="text-slate-700">Earnings</h3>
              <p class="mt-2 text-3xl text-slate-700">1123</p>
            </div>
          </li>
          <li class="w-60 shadow-lg flex flex-row items-center border border-solid border-slate-900 bg-white py-6 px-2 rounded-3xl">
            <FaTasks className="mr-7 w-7 h-7" />
            <div class="flex-col">
              <h3 class="text-slate-700">Tasks</h3>
              <p class="mt-2 text-3xl text-slate-700">1123</p>
            </div>
          </li>
        </ul>
      </div>
      {/* End of tab section*/}
      <div></div>
    </div>
  );
}

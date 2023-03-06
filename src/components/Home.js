import React from "react";
import SideMenu from "./SideMenu";
import { Routes,  Route, Link } from "react-router-dom";
import Users from "./Users";
import AdminHome from "./AdminHome";
import AccountManage from "./Account_Manage";
import ResetPin from "./Reset_pin";
import Transactions from "./Transactions";
import Profile from "./Profile";

export default function Home() {
  return (
    <div>
      <div class="flex">
        <SideMenu />
        <div class="flex-1">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/users" element={<Users />} />
            <Route path="/account_manage" element={<AccountManage />} />
            <Route path="/reset_pin" element={<ResetPin />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

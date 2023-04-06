import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "../components/admin/Dashboard";
import SideMenu from "../components/admin/SideMenu";
import Login from '../components/registry/Login';
import RoleList from "./admin/RoleList";
import AddStaff from "./admin/AddStaff";
import CUserRole from "./admin/cUserRole";
import StaffList from "./admin/StaffList";
import ViewRole from "./admin/ViewRole";
import AddStaffToRole from "./admin/AddStaffToRole";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [exam, setIsExam] = useState(false);// track whether user is logged in or not

  const handleLogin = () => {
    setIsLoggedIn(true); // set isLoggedIn to true when user logs in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // set isLoggedIn to false when user logs out
  };

  return (
    <div>
      {isLoggedIn ? (
        <div class="flex">
          <SideMenu onLogOut={handleLogout} />
          <div class="flex-1">
            <Routes>
              <Route path="/" element={<UserHome />} />
              <Route path="/roles" element={<RoleList />} />
              <Route path="/staffs" element={<StaffList />} />
              <Route path="/role_view" element={<ViewRole />} />
              <Route path="/create_staff" element={<AddStaff />} />
              <Route path="/add_role" element={<CUserRole />} />
              <Route path="/add_staff_to_role" element={<AddStaffToRole />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} /> } />
        </Routes>
      )}
    </div>
  );
}
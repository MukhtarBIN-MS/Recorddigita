import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "../components/registry/Dashboard";
import SideMenu from "../components/registry/SideMenu";
import Login from '../components/registry/Login';
import Requests from "./registry/Requests";
import Request_view from "./registry/Request_view";
import Track_List from "./registry/Track_list";
import Track from "./registry/Track";
import Approved_list from "./registry/Aproved_list";
import Approved from "./registry/Approved";
import Profile from "./registry/Profile";
import Processed from "./registry/Processed";

export default function Registry() {
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
              <Route path="/requests" element={<Requests />} />
              <Route path="/request_view" element={<Request_view />} />
              <Route path="/track_list" element={<Track_List />} />
              <Route path="/track" element={<Track />} />
              <Route path="/approved_list" element={<Approved_list />} />
              <Route path="/approved" element={<Approved />} />
              <Route path="/processed" element={<Processed />} />
              <Route path="/profile" element={<Profile />} />
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
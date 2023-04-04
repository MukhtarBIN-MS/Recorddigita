import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "../components/exams-record/Dashboard";
import SideMenu from "../components/exams-record/SideMenu";
import Login from '../components/exams-record/Login';
import Approved from "../components/exams-record/Approved";
import Processing from "../components/exams-record/Processing";
import Requests from "../components/exams-record/Requests";
import Request_view from "../components/exams-record/Request_view";
import Upload from "../components/exams-record/Upload";
import Profile from "../components/exams-record/Profile";


export default function ExamsRecord() {
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
              <Route path="/processing" element={<Processing />} />
              <Route path="/approved" element={<Approved />} />
              <Route path="/upload" element={<Upload />} />
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
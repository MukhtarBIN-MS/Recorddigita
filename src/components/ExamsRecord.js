import React, {useState} from "react";
import SideMenu from "../components/user/SideMenu";
import { Routes,  Route} from "react-router-dom";
import UserHome from "../components/user/Dashboard";
import ExRLogin from "./exams-record/Login";
import ExRRegister from "./exams-record/Register";

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
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
        <Route path="/" element={<ExRLogin onLogin={handleLogin} /> } />
        </Routes>
      )}
    </div>
  );
}
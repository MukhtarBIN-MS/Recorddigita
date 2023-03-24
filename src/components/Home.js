import React, {useState} from "react";
import SideMenu from "../components/user/SideMenu";
import { Routes,  Route} from "react-router-dom";
import UserHome from "../components/user/Dashboard";
import History from "../components/user/History";
import MyTranscripts from "../components/user/MyTranscripts";
import NewTranscript from "../components/user/NewTranscript";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import Track from "../components/user/Track";
import HolderInfo from "../components/user/HolderInfo";
import RequestDetails from "../components/user/RequestDetails";
import Profile from "../components/user/profile";
import TrackList from "../components/user/profile";
import ExRLogin from "./exams-record/Login";
import ExRRegister from "./exams-record/Register";

export default function Home() {
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
              <Route path="/my_transcripts" element={<MyTranscripts />} />
              <Route path="/history" element={<History />} />
              <Route path="/track" element={<Track />} />
              <Route path="/new_transcripts" element={<NewTranscript />} />
              <Route path="/info" element={<HolderInfo />} />
              <Route path="/request_details" element={<RequestDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/track_list" element={<TrackList />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} /> } />
        <Route path="/register" element={<Register /> } /> 
        <Route path="/exam-records/login" element={<ExRLogin /> } /> 
        </Routes>
      )}
    </div>
  );
}
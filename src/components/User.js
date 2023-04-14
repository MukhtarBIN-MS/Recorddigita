import React, {useState} from "react";
import SideMenu from "./user/SideMenu";
import { Routes,  Route} from "react-router-dom";
import UserHome from "./user/Dashboard";
import History from "./user/History";
import MyTranscripts from "./user/MyTranscripts";
import NewTranscript from "./user/NewTranscript";
import Login from "./user/Login";
import Register from "./user/Register";
import Track from "./user/Track";
import HolderInfo from "./user/HolderInfo";
import RequestDetails from "./user/RequestDetails";
import Profile from "./user/profile";
import TrackList from "./user/TrackList";
import ExRLogin from "./exams-record/Login";


export default function User() {
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
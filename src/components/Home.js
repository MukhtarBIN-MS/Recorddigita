import React, {useState} from "react";
import SideMenu from "./SideMenu";
import { Routes,  Route} from "react-router-dom";
import UserHome from "./Dashboard";
import History from "./History";
import MyTranscripts from "./MyTranscripts";
import NewTranscript from "./NewTranscript";
import Login from "./Login";
import Register from "./Register";
import Track from "./Track";
import HolderInfo from "./HolderInfo";
import RequestDetails from "./RequestDetails";
import Profile from "./profile";
import TrackList from "./TrackList";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // track whether user is logged in or not

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
        <Route path="/register" element={<Register /> } />  // show login component if user is not logged in
        </Routes>
      )}
    </div>
  );
}
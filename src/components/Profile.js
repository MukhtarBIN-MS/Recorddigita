import React from "react";
import profile from "../Images/no-avatar.jpg";

export default function Profile() {
  return (
    <div className="flex flex-col">
      <div className="px-10 py-10 flex-col ">
        <img src={profile} alt="profile_image" class="w-20 h-20" />
      </div>
      <div className="px-10 mt-20  flex-col">
        <h4 className="mb-5">Full Name:</h4>
        <h4 className="mb-5">Full Name:</h4>
        <h4 className="mb-5">Full Name:</h4>
        <h4 className="mb-5">Full Name:</h4>
        <h4 className="mb-5">Full Name:</h4>
        <h4 className="mb-5">Full Name:</h4>

        <button className="py-2 px-4 w-1/2 bg-gray-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

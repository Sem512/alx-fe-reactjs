import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => (
  <div>
    <h1>Profile</h1>
    <nav>
      <Link to="details">Profile Details</Link> | <Link to="settings">Profile Settings</Link>
    </nav>
    <Outlet />
  </div>
);

export default Profile;
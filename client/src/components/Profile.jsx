import React from "react";
import Navigation from "./Navigation";

function Profile() {
  return (
    <div className="postContainer">
      <div className="navigation-section">
        <Navigation />
      </div>

      <div className="profileBody">
        <div className="imageProfile">
          <img id="imgProfile" src="/images/profile.jpg" alt="profile_image" />

          <h3>Yeboah Solomon Opoku</h3>
          <h4>Jhoker</h4>
        </div>

      </div>
    </div>
  );
}

export default Profile;

import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

function Home() {
  return (
    <div className="container">
      <div className="navigation-section">
      <Header />
      <Navigation />
      </div>
      
      <div className="homeContainer">
      
          <div className="subBody">
            <img className="profile" src="/images/profile.jpg" alt="profile" />
            <div className="text">
              <h4>Yeboah Solomon Opoku</h4>
              <h5>Jhoker</h5>
            </div>
          </div>
          
          <div className="imageBody">
            <img className="banner" src="/images/banner.jpg" alt="post pic" />
            <p>I am here!!! Bankai!!!</p>
          </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Header from "./Header";
import Brand from "./Brand";
import Navigation from "./Navigation";

function Home() {
  return (
    <div className="container">
      <Navigation />
      <Brand />
      <div className="homeContainer">
        <Header />

        <div className="body">
          <div className="subBody">
            <img className="profile" src="/images/profile.jpg" alt="profile" />
            <div className="text">
              <h4>Yeboah Solomon Opoku</h4>
              <h5>Jhoker</h5>
            </div>
          </div>
          <hr />
          <div className="imageBody">
            <img className="banner" src="/images/banner.jpg" alt="post pic" />
            <p>I am here!!! Bankai!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

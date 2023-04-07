import React from "react";
import FirstPage from "./components/firstpage";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Post from "./components/Post";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

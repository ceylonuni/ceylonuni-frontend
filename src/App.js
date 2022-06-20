import React from "react";
import "primereact/resources/themes/lara-light-teal/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import Message from "./pages/messages/Simple";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-full">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/msg" element={<Message />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

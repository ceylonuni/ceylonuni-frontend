import React from "react";
import "primereact/resources/themes/lara-light-teal/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="min-h-full">
      <Login/>
    </div>
  );
}

export default App;

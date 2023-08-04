import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import LoginSucessful from "./LoginSucessful";

import { Register } from "./Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {/* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginsucessful" element={<LoginSucessful />} />
          <Route path="/calcu" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

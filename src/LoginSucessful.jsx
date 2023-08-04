import { React, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SideBar from "./components/SideBar";

function LoginSucessful() {
  return (
    <div>
      <SideBar />
      <Link to="/" style={{ margin: "20px" }}>
        home
      </Link>
    </div>
  );
}

export default LoginSucessful;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./login.css";

export const Login = () => {
  const [modal, setModal] = useState("true");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const navigateToanother = () => {
    const userDeat = JSON.parse(localStorage.getItem("persons"));
    userDeat.forEach((element) => {
      var a = element.email1;
      var b = element.password1;

      if (email === "") {
        alert("enter user details");
      } else {
        if (a === email && b === pass) {
          navigate("/LoginSucessful");
        } else {
          setModal("false");
        }
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(alreadyStoredData, "naresh");
    // console.log(pass);

    // if (alreadyStoredData === email) {
    //   var path = "./LoginSucessful";
    //   Navigate(path);
    // }
  };
  function closeModal() {
    setModal("true");
  }
  return (
    <div className="auth-form-container">
      {modal === "false" && (
        <div className="modal show">
          <Modal.Dialog>
            <Modal.Header>
              <button className="x" onClick={closeModal}>
                X
              </button>
            </Modal.Header>

            <Modal.Footer>
              <p style={{ color: "red", margin: "80px 0 0 0" }}>
                please check username and password..
              </p>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit" onClick={navigateToanother}>
          Log In
        </button>
      </form>

      <Link to="/register" className="btntogl">
        Don't have an account? Register here.
      </Link>
      <Link to="/calcu">Calculator</Link>
      {/* <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button> */}
    </div>
  );
};

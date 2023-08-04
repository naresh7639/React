import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
export const Register = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [regSucess, setRegSucess] = useState("false");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (email === "") {
    //   alert("enter details");
    // } else {
    //   if (win.getItem("name")) setName(win.getItem("name"));
    //   if (win.getItem("email")) setEmail(win.getItem("email"));
    //   if (win.getItem("pass")) setPass(win.getItem("pass"));
    //   win.setItem("name", name);
    //   win.setItem("email", email);
    //   win.setItem("pass", pass);
    //   setName("");
    //   setEmail("");
    //   setPass("");
    // }
  };

  const navigate = useNavigate();
  function navigateToAnother() {
    if (email === "") {
      alert("enter details");
    } else {
      // let userData = [localStorage.getItem("usedetail")];
      // const details = JSON.stringify({ email: email, pass: pass });
      // userData.push(details);
      // localStorage.setItem("usedetail", userData);

      var person = {
        email1: email,
        password1: pass,
      };
      var persons = JSON.parse(localStorage.getItem("persons")) || [];
      persons.push(person);

      localStorage.setItem("persons", JSON.stringify(persons));
      setEmail("");
      setPass("");
      setName("");

      setRegSucess("true");
      setTimeout(() => {
        setRegSucess("false");
        // navigate("/");
      }, 2000);
    }
  }
  // const handle = () => {
  //   var person = {
  //     name: FirstName,
  //     password: Password,
  //   };
  //   var persons = JSON.parse(localStorage.getItem("persons")) || [];
  //   persons.push(person);

  //   localStorage.setItem("persons", JSON.stringify(persons));
  //   alert("store successfully");
  //   setFirstName("");
  //   setPassword("");
  // };

  return (
    <div className="auth-form-container reg">
      {regSucess === "true" && (
        <div className="reg-succ" data-aos="fade-right">
          Register Sucessfull..
        </div>
      )}
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
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
        <button type="submit" onClick={navigateToAnother}>
          Register
        </button>
      </form>
      <Link to="/" className="btntogl">
        Already have an account? Login here.
      </Link>
      {/* <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button> */}
    </div>
  );
};

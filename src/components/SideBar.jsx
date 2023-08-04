import React from "react";
import "./sideBar.css";

function SideBar() {
  const numbers = [3, 1, 4, 1, 5,8,45,87];
  const ll = numbers.sort((a,b)=>a>b ? 0:-1)
  console.log(ll)
  return (
    <div
      className="sideBar"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <div>side bar</div>
    </div>
  );
}


export default SideBar;

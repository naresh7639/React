import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(parseInt(num1) + parseInt(num2));
  }, [num1, num2]);

  return (
    <div>
      <input
        onChange={(e) => setNum1(e.target.value)}
        type="text"
        placeholder="Enter number"
        value={num1}
      />
      <br />
      <h1>+</h1>
      <input
        onChange={(e) => setNum2(e.target.value)}
        type="text"
        placeholder="Enter number"
        value={num2}
      />
      <br />
      <h1>=</h1>

      {result % 2 === 0 ? (
        <p
          style={{
            color: "lightGreen",
            backgroundColor: "gray",
            padding: "10px",
          }}
        >
          {result}
        </p>
      ) : (
        <p
          style={{
            color: "Red",

            backgroundColor: "gray",
            padding: "10px",
          }}
        >
          {result}
        </p>
      )}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Calculator;

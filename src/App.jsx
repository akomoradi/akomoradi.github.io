import React, { useState } from "react";
import "./App.css";
import ca from "./icons8_broom.svg";
import clearimg from "./icons8_clear_symbol.svg";
import reloadimg from "./icons8_reset.svg";
function App() {
  const handlecalc = async () => {
    try {
      const response = await fetch("https://px3kbfxb-8000.euw.devtunnels.ms/calc/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ expression }),
      });
      // Parsing the response and updating the result state
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error calculating:", error);
    }
  };
  // manage the user input expression
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };
  function reload() {
    window.location.reload(false);
  }
  // Function to clear the last character

  // Function to clear the entire
  const clearAll = () => {
    setExpression("");
  };

  const clear = () => {
    const newExpression = expression.slice(0, -1);
    setExpression(newExpression);
  };

  //  Calculator App ui
  return (
    <body className="container">
      <div className="calc-body">
        <h1 className="head">Hi , welcome to calculator</h1>

        <div className="">
          <div className="numinput">
            {" "}
            <input type="text" value={expression} className="" />
            <div className="">
              <h1>{result}</h1>
            </div>
          </div>
          <div className="btncontainer">
            <button onClick={clear} className="clearbtn">
              <img
                className="clearimg"
                height={25}
                width={25}
                src={clearimg}
                alt=""
              />
            </button>
            <button onClick={clearAll} className="clearbtn">
              <img
                className="clearimg"
                height={25}
                width={25}
                src={ca}
                alt=""
              />
            </button>
            <button onClick={reload} className="clearbtn">
              <img
                className="clearimg"
                height={25}
                width={25}
                src={reloadimg}
                alt=""
              />
            </button>
          </div>
          <div className="">
            <div className="calc-row-button">
              {[7, 8, 9, "/"].map((value) => (
                <button
                  className={`${value === "/" && "other"} `}
                  key={value}
                  onClick={() => handleButtonClick(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <div className="calc-row-button">
              {" "}
              {[4, 5, 6, "*"].map((value) => (
                <button
                  className={`${value === "*" && "other"} `}
                  key={value}
                  onClick={() => handleButtonClick(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <div className="calc-row-button">
              {" "}
              {[1, 2, 3, "-"].map((value) => (
                <button
                  className={`${value === "-" && "other"} `}
                  key={value}
                  onClick={() => handleButtonClick(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <div className="">
              {[0, ".", "+", "="].map((value) => (
                <button
                  className={`${value === "+" && "other"} `}
                  key={value}
                  onClick={
                    value === "=" ? handlecalc : () => handleButtonClick(value)
                  }
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bottomnav">
        <li className="list-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="144"
            height="144"
          >
            <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" />
          </svg>
        </li>
        <li className="list-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="480"
            height="480"
          >
            <path d="M6 4C4.895 4 4 4.895 4 6L4 12C4 13.105 4.895 14 6 14L12 14C13.105 14 14 13.105 14 12L14 6C14 4.895 13.105 4 12 4L6 4 z M 18 4C16.895 4 16 4.895 16 6L16 12C16 13.105 16.895 14 18 14L24 14C25.105 14 26 13.105 26 12L26 6C26 4.895 25.105 4 24 4L18 4 z M 6 16C4.895 16 4 16.895 4 18L4 24C4 25.105 4.895 26 6 26L12 26C13.105 26 14 25.105 14 24L14 18C14 16.895 13.105 16 12 16L6 16 z M 18 16C16.895 16 16 16.895 16 18L16 24C16 25.105 16.895 26 18 26L24 26C25.105 26 26 25.105 26 24L26 18C26 16.895 25.105 16 24 16L18 16 z" />
          </svg>
        </li>
        <li className="list-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="480"
            height="480"
          >
            <path d="M6 4C4.895 4 4 4.895 4 6L4 12C4 13.105 4.895 14 6 14L12 14C13.105 14 14 13.105 14 12L14 6C14 4.895 13.105 4 12 4L6 4 z M 18 4C16.895 4 16 4.895 16 6L16 12C16 13.105 16.895 14 18 14L24 14C25.105 14 26 13.105 26 12L26 6C26 4.895 25.105 4 24 4L18 4 z M 6 16C4.895 16 4 16.895 4 18L4 24C4 25.105 4.895 26 6 26L12 26C13.105 26 14 25.105 14 24L14 18C14 16.895 13.105 16 12 16L6 16 z M 18 16C16.895 16 16 16.895 16 18L16 24C16 25.105 16.895 26 18 26L24 26C25.105 26 26 25.105 26 24L26 18C26 16.895 25.105 16 24 16L18 16 z" />
          </svg>
        </li>
      </div>
    </body>
  );
}

export default App;

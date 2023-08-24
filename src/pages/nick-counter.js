import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const pi = 3.14;

const SmallHeader = ({ title }) => (
  <header>THIS IS A SMALL HEADER {title}</header>
);

const mySection = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 10,
};
// text-align: center;
// textAlign: 'center'
// border: 1px solid red;
// border: '1px solid red'

const wrapperStyles = {
  textAlign: "center",
};

function NickCounterPage() {
  const [counter, setCounter] = useState(0);

  const handleChangeCounter = (type, amount) => {
    if (type === "inc") {
      setCounter(amount ? counter + amount : counter + 1);
    } else if (type === "dec") {
      setCounter(amount ? counter - amount : counter - 1);
    }
  };

  const PageTitle = styled("h1")(({ num }) => ({
    color: num === 3 ? "orange" : "#ff0000",
  }));

  // const handleIncreaseCounter = () => {
  //   setCounter(counter + 1);
  // };

  // const handleChangeCounter = () => {
  //   setCounter(counter - 1);
  // };

  useEffect(() => {
    handleChangeCounter("inc", 10);
    console.log("component did render");
  }, []);

  return (
    <div style={wrapperStyles}>
      <Navbar />
      <SmallHeader />
      <PageTitle num={counter}>title</PageTitle>
      <div>Test</div>
      <div className={`badge ${counter === 4 ? "bg-danger" : "bg-secondary"}`}>
        {pi}
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-danger h-25"
          onClick={() => handleChangeCounter("dec")}
        >
          -
        </button>
        <div className="h4 p-4">{counter}</div>
        <button
          className="btn btn-success h-25"
          onClick={() => handleChangeCounter("inc")}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default NickCounterPage;

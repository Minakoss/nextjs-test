import Layout from "@/components/Layout";
import React, { useState } from "react";

function Loops() {
  const innerStyles = {
    backgroundColor: "#c4c4c4",
    padding: 40,
  };

  const names = ["nikos", "aggelos", "mixalis", "maria"];

  const namesFromApi = [
    { id: 1, name: "nikos" },
    { id: 2, name: "aggelos" },
    { id: 3, name: "mixalis" },
    { id: 4, name: "maria" },
  ];

  return (
    <Layout title="loops" layoutStyles={innerStyles}>
      {/* {names.map((name) => {
        return <div>{name}</div>;
      })} */}
      {/* {names.map((name) => (
        <div>{name}</div>
      ))} */}
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
      {/* {namesFromApi.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))} */}
    </Layout>
  );
}

export default Loops;

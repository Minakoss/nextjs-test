import Layout from "@/components/Layout";
import React, { useState } from "react";
import PersonTile from "@/components/PersonTile";

function Loops3() {
  const innerStyles = {
    backgroundColor: "#c4c4c4",
    padding: 40,
  };

  const persons = ["Nikos", "aggelos", "mixalis", "maria"];

  return (
    <Layout title="loops" layoutStyles={innerStyles}>
      {persons.map((person) => (
        <PersonTile personName={person} />
      ))}
    </Layout>
  );
}

export default Loops3;

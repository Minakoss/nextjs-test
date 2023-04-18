import Layout from "@/components/Layout";
import React, { useState } from "react";

function Loops() {
  const innerStyles = {
    backgroundColor: "red",
    padding: 40,
  };

  return (
    <Layout layoutStyles={innerStyles}>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia saepe
        a repellendus cumque dignissimos incidunt vitae vero laboriosam odio
        porro ullam ipsum doloremque temporibus officia, accusamus minus sit
        quidem architecto!
      </div>
    </Layout>
  );
}

export default Loops;

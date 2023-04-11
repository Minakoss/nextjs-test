import Footer from "@/components/Down";
import Navbar from "@/components/Navbar";
import React from "react";

function yourgallery() {
  return (
    <>
      <Navbar />
      <div className="imagebghome">
        <h1 className="animate__animated animate__bounce animate__slideInUp">
          Your Gallery
        </h1>
        <p className="animate__animated animate__bounce animate__slideInDown animate__delay-1s ">
          Under Contraction
        </p>
      </div>
      <Footer />
    </>
  );
}

export default yourgallery;

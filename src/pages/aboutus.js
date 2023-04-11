import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

function aboutus() {
  return (
    <>
      <Navbar />
      <div className="imagebghome">
        <h1 className="animate__animated animate__bounce animate__slideInUp">
          About us
        </h1>
        <p className="animate__animated animate__bounce animate__slideInDown animate__delay-1s ">
          Under Contraction
        </p>
      </div>
      <Footer />
    </>
  );
}

export default aboutus;

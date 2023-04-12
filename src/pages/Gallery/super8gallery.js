import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

function super8gallery() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <h1 className="animate__animated animate__bounce animate__slideInUp">
          Super8
        </h1>
        <p className="animate__animated animate__bounce animate__slideInDown animate__delay-1s ">
          Under Contraction
        </p>
        <Link href="/Gallery">Back</Link>
      </div>

      <Footer />
    </>
  );
}

export default super8gallery;

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function colorfilmgallery() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div className="grid row">
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img className="img-thumbnail" src="../47050013.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img className="img-thumbnail" src="../47050024.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img className="img-thumbnail" src="../47060024.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img className="img-thumbnail" src="../47070004.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft">
            <img className="img-thumbnail" src="../47070020.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img className="img-thumbnail" src="../47080005.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img className="img-thumbnail" src="../47080010.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img className="img-thumbnail" src="../47080016.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img className="img-thumbnail" src="../47080021.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img className="img-thumbnail" src="../75350004.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img className="img-thumbnail" src="../75350017.jpg" alt="#" />
          </div>
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img className="img-thumbnail" src="../75350034.jpg" alt="#" />
          </div>
        </div>
        <button onclick="history.back()">Back</button>
      </div>
      <Footer />
    </>
  );
}

export default colorfilmgallery;

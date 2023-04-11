import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function super8gallery() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div class="grid row">
          <div className="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img class="img-thumbnail" src="../47050013.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img class="img-thumbnail" src="../47050024.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img class="img-thumbnail" src="../47060024.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img class="img-thumbnail" src="../47070004.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft">
            <img class="img-thumbnail" src="../47070020.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img class="img-thumbnail" src="../47080005.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img class="img-thumbnail" src="../47080010.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img class="img-thumbnail" src="../47080016.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img class="img-thumbnail" src="../47080021.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img class="img-thumbnail" src="../75350004.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img class="img-thumbnail" src="../75350017.jpg" alt="#" />
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img class="img-thumbnail" src="../75350034.jpg" alt="#" />
          </div>
        </div>
        <button onclick="history.back()">Back</button>
      </div>
      <Footer />
    </>
  );
}

export default super8gallery;

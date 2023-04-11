import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function BWfilmGallery() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div class=" grid row">
          <div className="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img class="img-thumbnail" src="../bwphotos/000011.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img class="img-thumbnail" src="../bwphotos/000016.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img class="img-thumbnail" src="../bwphotos/000021.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img class="img-thumbnail" src="../bwphotos/000022.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft">
            <img class="img-thumbnail" src="../bwphotos/000025.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img class="img-thumbnail" src="../bwphotos/000030.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img class="img-thumbnail" src="../bwphotos/000034.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img class="img-thumbnail" src="../bwphotos/000036.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img class="img-thumbnail" src="../bwphotos/000040.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img class="img-thumbnail" src="../bwphotos/000051.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img class="img-thumbnail" src="../bwphotos/000062.jpg" alt="#" />
          </div>
          <div class="col-6 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img class="img-thumbnail" src="../bwphotos/000103.jpg" alt="#" />
          </div>

          <button onclick="history.back()">Back</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BWfilmGallery;

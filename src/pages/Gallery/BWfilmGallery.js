import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function BWfilmGallery() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div class=" grid row">
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img
              class="img-thumbnail"
              src="../bwphotos/000011sample.jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img
              class="img-thumbnail"
              src="../bwphotos/000016sample.jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img
              class="img-thumbnail"
              src="../bwphotos/000021sample(1).jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img
              class="img-thumbnail"
              src="../bwphotos/000022sample(1).jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft">
            <img
              class="img-thumbnail"
              src="../bwphotos/000025sample(1).jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img
              class="img-thumbnail"
              src="../bwphotos/000030sample.jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img
              class="img-thumbnail"
              src="../bwphotos/000113sample.jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img
              class="img-thumbnail"
              src="../bwphotos/000036sample.jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img
              class="img-thumbnail"
              src="../bwphotos/000040sample.jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img
              class="img-thumbnail"
              src="../bwphotos/000051sample.jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img
              class="img-thumbnail"
              src="../bwphotos/000062sample.jpg"
              alt="#"
            />
          </div>
          <div class="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img
              class="img-thumbnail"
              src="../bwphotos/000103sample.jpg"
              alt="#"
            />
          </div>

          <Link href="/Gallery">Back</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BWfilmGallery;

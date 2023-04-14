import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function colorfilmgallery() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div className="grid row">
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img
              className="img-thumbnail"
              src="../Colorphotos/47050013sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img
              className="img-thumbnail"
              src="../Colorphotos/47050024sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img
              className="img-thumbnail"
              src="../Colorphotos/47060024sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img
              className="img-thumbnail"
              src="../Colorphotos/47070004sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft">
            <img
              className="img-thumbnail"
              src="../Colorphotos/47070020sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img
              className="img-thumbnail"
              src="../Colorphotos/47080005sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img
              className="img-thumbnail"
              src="../Colorphotos/47080010sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img
              className="img-thumbnail"
              src="../Colorphotos/47080016sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <img
              className="img-thumbnail"
              src="../Colorphotos/47080021sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <img
              className="img-thumbnail"
              src="../Colorphotos/75350004sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight ">
            <img
              className="img-thumbnail"
              src="../Colorphotos/75350017sample.jpg"
              alt="#"
            />
          </div>
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <img
              className="img-thumbnail"
              src="../Colorphotos/75350034sample.jpg"
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

export default colorfilmgallery;

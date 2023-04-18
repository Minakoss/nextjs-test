import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function colorfilmgallery() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div
          class={`modal ${ModalIsOpen ? "d-block" : "d-none"}`}
          tabindex="-1"
          role="dialog"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content animate__animated  animate__slideInDown  ">
              <div class="modal-header">
                <h6 class="modal-title">Color Gallery</h6>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModalIsOpen(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img
                  className="imgfull"
                  src="../Colorphotos/47050013.jpg"
                  alt="#"
                  width="800"
                  height="800"
                />
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
        <div className="grid row">
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <button onClick={() => setModalIsOpen(true)}>
              <img
                className="img-thumbnail"
                src="../Colorphotos/47050013sample.jpg"
                alt="#"
              />
            </button>
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

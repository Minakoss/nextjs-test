import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function BWfilmGallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div className="imagebg">
        <div
          class={`modal ${modalIsOpen ? "d-block" : "d-none"}`}
          tabindex="-1"
          role="dialog"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content ">
              <div class="modal-header">
                <h5 class="modal-title">London</h5>
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
                <img src="../bwphotos/000011.jpg" alt="#" />
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>

        <div class=" grid row">
          <div className="col-12 col-md-4 col-xl-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <button onClick={() => setModalIsOpen(true)}>
              <img
                class="img-thumbnail"
                src="../bwphotos/000011sample.jpg"
                alt="#"
              />
            </button>
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

import React from "react";
import Navbar from "@/components/Navbar";

function Gallery() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-xl-4 align-self-start animate__animated animate__bounce ">
              <div className="boximg1">
                <h2 className="size">Super8 Film</h2>
                <img src="./auke-bakker.jpg" alt="" />
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__delay-1s ">
              <div className="boximg2">
                <h2 className="size">Color Film</h2>
                <img src="./75350004.jpg" alt="" />
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-4 align-self-end animate__animated animate__bounce animate__delay-2s  ">
              <div className="boximg3">
                <h2 className="size">B&W film</h2>

                <img src="./IMG_8303.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footercss">
        <div className="w3">
          <a href="#">
            <i className="fa fa-facebook-official "></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram "></i>
          </a>
          <a href="https://twitter.com/home">
            <i className="fa fa-twitter "></i>
          </a>

          <div>
            <h6> &copy;Minakos</h6>
          </div>
          <p> Copyright © 2023 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Gallery;

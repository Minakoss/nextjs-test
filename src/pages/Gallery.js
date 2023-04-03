import React from "react";
import Navbar from "@/components/Navbar";

function Gallery() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-xl-4 align-self-start animate__animated animate__bounce animate__slideInDown">
              <div className="boximg1">
                <h2 className="size">Super8 Film</h2>
                <img src="./auke-bakker.jpg" alt="" />
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInUp ">
              <div className="boximg2">
                <h2 className="size">Color Film</h2>
                <img src="./75350004.jpg" alt="" />
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-4 align-self-end animate__animated animate__bounce animate__slideInDown ">
              <div className="boximg3">
                <h2 className="size">B&W film</h2>

                <img src="./IMG_8303.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <h6> &copy;MiNakos</h6>
          <a href="mailto:hege@example.com">hege@example.com</a>
        </div>
      </footer>
    </>
  );
}

export default Gallery;

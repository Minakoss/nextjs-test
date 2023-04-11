import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function Gallery() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-xl-4 align-self-start animate__animated animate__slideInRight ">
              <Link href="Gallery/super8gallery">
                <div className="animatedimages">
                  <h2 className="size">Super8 Film</h2>
                  <img src="./auke-bakker.jpg" alt="" />
                </div>
              </Link>
            </div>
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated  animate__slideInDown ">
              <Link href="/Gallery/colorfilmgallery">
                <div className="animatedimages">
                  <h2 className="size">Color Film</h2>
                  <img src="./75350004.jpg" alt="" />
                </div>
              </Link>
            </div>
            <div class="col-12 col-md-12 col-xl-4 align-self-end animate__animated  animate__slideInLeft  ">
              <Link href="/Gallery/BWfilmGallery">
                <div className="animatedimages">
                  <h2 className="size">B&W film</h2>

                  <img src="./IMG_8303.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;

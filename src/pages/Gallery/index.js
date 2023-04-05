import React from "react";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";

function Gallery() {
  return (
    <MainLayout pageTitle="Gallery">
      <div className="imagebg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-xl-4 align-self-start animate__animated animate__bounce ">
              <Link href="/Gallery/Super8Film">
                <div className="boximg1 minakosAnimatedImage">
                  <h2 className="size">Super8 Film</h2>
                  <img src="./auke-bakker.jpg" alt="" />
                </div>
              </Link>
            </div>
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__delay-1s ">
              <div className="boximg2 minakosAnimatedImage">
                <h2 className="size">Color Film</h2>
                <img src="./75350004.jpg" alt="" />
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-4 align-self-end animate__animated animate__bounce animate__delay-2s  ">
              <div className="boximg3 minakosAnimatedImage">
                <h2 className="size">B&W film</h2>

                <img src="./IMG_8303.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Gallery;

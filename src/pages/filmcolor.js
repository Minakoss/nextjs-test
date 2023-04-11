import Footer from "@/components/Down";
import Navbar from "@/components/Navbar";
import React from "react";

function filmcolor() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInLeft ">
              <div className="box3">
                <h2>Reversal Film</h2>
                Reversal film can be projected for viewing, printed on reversal
                paper in a darkroom, or scanned into a computer for editing and
                printing. Reversal film requires more precise exposure than
                negative film because it has less exposure latitude; errors in
                exposure or color balance may be difficult or impossible to
                correct in printing.
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInDown  ">
              <div className="box2">
                <h2>Negative Film</h2>
                Negative film produces an image that is the opposite of the
                original scene in color and density. It can be printed on paper
                in a darkroom to make a positive or scanned into a computer for
                editing and printing. It is usually easier to work with negative
                film if the final medium is a print. Color negative film has a
                considerable tolerance for under- and overexposure , and, when
                scanned, is superior to reversal film for photographs of very
                contrast-laden scenes.
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInRight">
              <div className="box1">
                <h2>Professional Film</h2>
                Negative or reversal "professional" film also is designed and
                manufactured for professionals who demand accurate color
                balance. A film's age and its ISO rating and color balance
                change during storage. Professional film is shipped with its
                qualities near their peak, and is refrigerated by camera stores
                to ensure that it is in the best condition. Professionals
                usually buy large quantities of film, preferably all from the
                same manufacturing batch, and they shoot test rolls to determine
                its precise ISO and color balance. Professionals keep film
                refrigerated until it is used, and develop it as soon as
                possible. The useful life of unopened film can be extended by
                refrigeration or freezing. However, once film is opened , it is
                better kept at room temperature and should be exposed and
                developed promptly.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default filmcolor;

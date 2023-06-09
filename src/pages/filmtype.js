import React from "react";
import "animate.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function filmtype() {
  return (
    <>
      <Navbar />
      <div className="imagebg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInDown">
              <div className="box1">
                <h2>35mm Film</h2>
                The most popular type of film. Also known as 135. These films
                are the ones that I showed you above. They are small and easy to
                load. Generally, you will have 24 to 36 photos in a roll.
                Actually, if you can use your film wisely, you can have 38–39
                photos from a 36 roll, but let’s not focus on the tricks for
                now. I love 35mm because you can find them everywhere and find a
                lab to develop them easily. Also developing them at home is
                easier. They are much cheaper than the following sizes because
                you can have more photos in a roll.
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInUp  ">
              <div className="box2">
                <h2>Super 8 Film</h2>
                Super 8 mm film is a motion-picture film format released in 1965
                by Eastman Kodak as an improvement over the older "Double" or
                "Regular" 8 mm home movie format. Super 8 spool with film -
                detail "Insert film here" The film is nominally 8 mm wide, the
                same as older formatted 8 mm film, but the dimensions of the
                rectangular perforations along one edge are smaller, which
                allows for a greater exposed area. The Super 8 standard also
                allocates the border opposite the perforations for an oxide
                stripe upon which sound can be magnetically recorded. Unlike
                Super 35, the film stock used for Super 8 is not compatible with
                standard 8 mm film cameras. There are several varieties of the
                film system used for shooting, but the final film in each case
                has the same dimensions. The most popular system by far was the
                Kodak system.
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInDown ">
              <div className="box3">
                <h2>120mm Film</h2>
                The second most popular film, also known as the medium format.
                These films are for larger cameras, so our little point and
                shoots cannot work with them. Lomography’s Diana F Plus is one
                of the popular new medium format cameras and very
                budget-friendly. Of course, there are much more expensive and
                professional medium format cameras like Mamiya 645. As far as I
                can tell, professionals prefer medium format better. The only
                sad thing about the medium format is it can be challenging to
                find a lab to develop them.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default filmtype;

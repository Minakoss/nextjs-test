import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function contact() {
  return (
    <>
      <Navbar />
      <div className="imagebghome">
        <div class="container text-center">
          <div class="row">
            <div class="col-sm-12">
              <div className="form">
                <section class="mb-4">
                  <h2 class="h1-responsive font-weight-bold text-center my-4">
                    Contact us
                  </h2>

                  <p class="text-center w-responsive mx-auto mb-5">
                    Do you have any questions? <br />
                    Do you have any Suggestions? <br />
                    Please do not hesitate to contact us directly.
                  </p>

                  <div class="row">
                    <div className="form1">
                      <div class="col-md-8 mb-md-6 mb-3 animate__animated  animate__slideInDown">
                        <div className="box1">
                          <form
                            id="contact-form"
                            name="contact-form"
                            action="mail.php"
                            method="POST"
                          >
                            <div class="row">
                              <div class="col-md-6">
                                <div class="md-form mb-0">
                                  <input
                                    placeholder="name"
                                    type="text"
                                    id="name"
                                    name="name"
                                    class="form-control"
                                  />
                                  <label for="name" class=""></label>
                                </div>
                              </div>

                              <div class="col-md-6">
                                <div class="md-form mb-0">
                                  <input
                                    placeholder="email"
                                    type="text"
                                    id="email"
                                    name="email"
                                    class="form-control"
                                  />
                                  <label for="email" class=""></label>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-12">
                                <div class="md-form mb-0">
                                  <input
                                    placeholder="Subject"
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    class="form-control"
                                  />
                                  <label for="subject" class=""></label>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-12">
                                <div class="md-form">
                                  <textarea
                                    placeholder="message"
                                    type="text"
                                    id="message"
                                    name="message"
                                    rows="2"
                                    class="form-control md-textarea"
                                  ></textarea>
                                  <label for="message"></label>
                                </div>
                              </div>
                            </div>
                          </form>

                          <div class="text-center text-md-left">
                            <a
                              class="btn btn-primary"
                              onclick="document.getElementById('contact-form').submit();"
                            >
                              Send
                            </a>
                          </div>
                          <div class="status"></div>
                        </div>

                        <div class="col-md-3 text-center">
                          <ul class="list-unstyled mb-0"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default contact;

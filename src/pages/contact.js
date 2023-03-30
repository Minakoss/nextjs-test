import React from "react";

function contact() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="navbar-brand">Analog Life</div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalogue
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/filmtype">
                      Film Type
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/filmcolor">
                      Film color
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/filmBW">
                      Film B&W
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/super8">
                      Super 8
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Gallery">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Αναζήτηση"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Αναζήτηση
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="imagebghome">
        <div class="container text-center">
          <div class="row">
            <div class="col-sm-8">
              <div className="form">
                <section class="mb-4">
                  <h2 class="h1-responsive font-weight-bold text-center my-4">
                    Contact us
                  </h2>

                  <p class="text-center w-responsive mx-auto mb-5">
                    Do you have any questions? <br />
                    Please do not hesitate to contact us directly.
                  </p>

                  <div class="row">
                    <div className="form1">
                      <div class="col-md-9 mb-md-0 mb-5">
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
                                <label for="name" class="">
                                  Your name
                                </label>
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
                                <label for="email" class="">
                                  Your email
                                </label>
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
                                <label for="subject" class="">
                                  Subject
                                </label>
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
                                <label for="message">Your message</label>
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
                </section>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4 animate__animated animate__bounce animate__slideInRight animate__delay-2s ">
              <div className="box1">
                <h2>Help us </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlFile1"></label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="exampleFormControlFile1"
                    />
                  </div>
                  <button class="btn btn-outline-success" type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <h6> &copy;Minakos</h6>

          <a href="mailto:hege@example.com">hege@example.com</a>
          <div>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default contact;

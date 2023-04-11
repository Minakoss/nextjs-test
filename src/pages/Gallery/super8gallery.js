import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";

function super8gallery() {
  const images = ["47050013", "47050024", "47070004", "47080005"];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenImage, setModalIsOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSaveChanges = () => {
    fetch("fjaaeig").then((res) => {
      if (res.status === 200) {
        handleCloseModal();
      }
    });
  };

  return (
    <>
      <Navbar />
      <div class="grid row">
        {images.map((image, index) => (
          <div
            key={index}
            className="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft "
          >
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage(`../${image}.jpg`);
              }}
            >
              <img class="img-thumbnail" src={`../${image}.jpg`} alt="#" />
            </button>
          </div>
        ))}
      </div>
      <div className="imagebg">
        {/* Tropos 1 */}
        {/* {modalIsOpen ? <Modal handleClose={() => handleCloseModal()} /> : ""} */}

        {/* Tropos 2 */}
        {modalIsOpenImage && (
          <Modal onClose={() => setModalIsOpenImage(false)} disableButtons>
            <img src={selectedImage} style={{ width: "100%" }} />
          </Modal>
        )}

        {modalIsOpen && (
          <Modal
            onSave={() => handleSaveChanges()}
            onClose={() => handleCloseModal()}
          >
            "Are you sure you want to save the changes"
          </Modal>
        )}
        {/* <div class={`modal ${modalIsOpen ? 'd-block' : 'd-none'}`} tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => {handleCloseModal()}}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" onClick={() => handleSaveChanges()}>Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => handleCloseModal()}>Close</button>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="text-center">
          <button className="btn btn-primary" onClick={() => {
            setModalIsOpen(!modalIsO;
              setSelectedImage('');pen)
          }}>OPEN MODAL</button>
        </div> */}

        <div class="grid row">
          <div className="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("../47050013.jpg");
              }}
            >
              <img class="img-thumbnail" src="../47050013.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("../47050024.jpg");
              }}
            >
              <img class="img-thumbnail" src="../47050024.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight ">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("../47060024.jpg");
              }}
            >
              <img class="img-thumbnail" src="../47060024.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("");
              }}
            >
              <img class="img-thumbnail" src="../47070004.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("");
              }}
            >
              <img class="img-thumbnail" src="../47070020.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("");
              }}
            >
              <img class="img-thumbnail" src="../47080005.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight ">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("");
              }}
            >
              <img class="img-thumbnail" src="../47080010.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("");
              }}
            >
              <img class="img-thumbnail" src="../47080016.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft ">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("");
              }}
            >
              <img class="img-thumbnail" src="../47080021.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInLeft slow">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("");
              }}
            >
              <img class="img-thumbnail" src="../75350004.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight ">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("");
              }}
            >
              <img class="img-thumbnail" src="../75350017.jpg" alt="#" />
            </button>
          </div>
          <div class="col-lg-3 thumb thumbnail animate__animated animate__slideInRight slow">
            <button
              onClick={() => {
                setModalIsOpenImage(!modalIsOpenImage);
                setSelectedImage("");
              }}
            >
              <img class="img-thumbnail" src="../75350034.jpg" alt="#" />
            </button>
          </div>
          <button onclick="history.back()">Back</button>
        </div>
      </div>
      <button className="btn btn-success" onClick={() => setModalIsOpen(true)}>
        SAVE CHANGES
      </button>
      <Footer />
    </>
  );
}

export default super8gallery;

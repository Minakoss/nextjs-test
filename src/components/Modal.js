import React from "react";

function Modal({ children, onClose, onSave, disableButtons }) {
  const modalStyles = {
    backgroundColor: "#fff",
    width: 600,
    padding: 40,
    borderRadius: 7,
    position: "fixed",
    top: 60,
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "37px 37px 43px -1px rgba(107,96,96,0.75)",
    zIndex: 1000,
  };

  return (
    <div className={`my-modal`} style={modalStyles}>
      <div className="content-wrapper" style={{ position: "relative" }}>
        <button
          onClick={() => onClose()}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          X
        </button>
        <h3>Welcome</h3>
        <div className="modal-content mb-4 mt-2">{children}</div>
        {!disableButtons && (
          <div className="buttons-wrapper">
            <button
              className="btn btn-success text-white fw-bold text-lg"
              style={{ marginRight: 5 }}
              onClick={() => onSave()}
            >
              Save
            </button>
            <button
              className="btn btn-danger text-white fw-bold text-lg"
              onClick={() => onClose()}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;

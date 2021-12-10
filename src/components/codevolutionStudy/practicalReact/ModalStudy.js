import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ModalStudy = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "grey" },
          content: { color: "orange" },
        }}
      >
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default ModalStudy;

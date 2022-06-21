import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AppModal = (props) => {
  const { title, body, isModalOpen, toggle, from } = props;

  return (
    <Modal isOpen={isModalOpen} toggle={toggle} className="modal-container">
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter style={{ borderTop: "none" }}>
        <button onClick={toggle} className="btn btn-primary">
          {from === "accept" ? "Confirm Acceptance" : "Confirm Rejection"}
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default AppModal;

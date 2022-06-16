import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const AppModal = (props) => {
  const { title, body, isModalOpen } = props;
  const [isOpen, setIsOpen] = useState(isModalOpen);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modal-container">
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{body}</ModalBody>
    </Modal>
  );
};

export default AppModal;

import { Modal } from "react-bootstrap";

const CommonModal = (props: any) => {
  return (
    <Modal show={props?.showModal} onHide={props?.handleClose}>
      <Modal.Header>
        <Modal.Title>{props?.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props?.modalBody}</Modal.Body>
    </Modal>
  );
};
export default CommonModal;

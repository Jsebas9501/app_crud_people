import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

export default function ModalEliminar({
  modalDelete,
  requestDelete,
  selectedPerson,
  openCloseModalDelete,
}) {
  return (
    <div>
      <Modal isOpen={modalDelete}>
        <ModalBody>
          ¿Estás seguro que deseas eliminar la persona{" "}
          {selectedPerson && selectedPerson.first_name}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => requestDelete()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => openCloseModalDelete()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

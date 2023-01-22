import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function ModalPut({
  modalPut,
  handleChange,
  openCloseModalPut,
  requestPut,
  selectedPerson,
}) {
  return (
    <div>
      <Modal isOpen={modalPut}>
        <ModalHeader>Editar Persona</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Tipo Documento: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="document_type"
              onChange={handleChange}
              value={selectedPerson && selectedPerson.document_type}
            />
            <br />

            <label>Documento: </label>
            <br />
            <input
              type="number"
              className="form-control"
              name="document"
              onChange={handleChange}
              value={selectedPerson && selectedPerson.document}
            />
            <br />

            <label>Nombres: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="first_name"
              onChange={handleChange}
              value={selectedPerson && selectedPerson.first_name}
            />
            <br />

            <label>Apellidos: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="last_name"
              onChange={handleChange}
              value={selectedPerson && selectedPerson.last_name}
            />
            <br />

            <label>Correo: </label>
            <br />
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={selectedPerson && selectedPerson.email}
            />
            <br />

            <label>Hobbies: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="hobbie"
              onChange={handleChange}
              value={selectedPerson && selectedPerson.hobbie}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => requestPut()}>
            Actualizar
          </button>
          {"   "}
          <button
            className="btn btn-danger"
            onClick={() => {
              openCloseModalPut();
            }}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

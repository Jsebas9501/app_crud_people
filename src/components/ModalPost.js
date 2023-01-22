import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function ModalPost({
  modalPost,
  openCloseModalPost,
  handleChange,
  requestPost,
}) {
  return (
    <div>
      <Modal isOpen={modalPost}>
        <ModalHeader>Insertar Persona</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Tipo Documento: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="document_type"
              onChange={handleChange}
              required
            />
            <br />

            <label>Documento: </label>
            <br />
            <input
              type="number"
              className="form-control"
              name="document"
              onChange={handleChange}
              required
            />
            <br />

            <label>Nombres: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="first_name"
              onChange={handleChange}
              required
            />
            <br />

            <label>Apellidos: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="last_name"
              onChange={handleChange}
              required
            />
            <br />

            <label>Correo: </label>
            <br />
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              required
            />
            <br />

            <label>Hobbies: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="hobbie"
              onChange={handleChange}
              required
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => requestPost()}>
            Insertar
          </button>
          {"   "}
          <button
            className="btn btn-danger"
            onClick={() => {
              openCloseModalPost();
            }}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
